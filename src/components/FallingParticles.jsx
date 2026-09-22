import React, { useEffect, useRef } from "react";

export default function FallingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const PARTICLE_COUNT = isMobile ? 16 : 36;

    // Mouse tracker for desktop breeze effect
    let mouse = { x: -1000, y: -1000, vx: 0, vy: 0, lastX: 0, lastY: 0 };
    let hasMouseMoved = false;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      if (isMobile) return;
      hasMouseMoved = true;
      mouse.vx = (e.clientX - mouse.lastX) * 0.2;
      mouse.vy = (e.clientY - mouse.lastY) * 0.2;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Palette & Glyph sets
    const glyphs = ["♡", "♥", "✦", "❦"];
    const colors = [
      "rgba(201, 162, 74, ", // Gold #C9A24A
      "rgba(223, 191, 109, ", // Light Gold #DFBF6D
      "rgba(166, 124, 46, ", // Dark Gold #A67C2E
      "rgba(220, 234, 213, ", // Sage #DCEAD5
      "rgba(232, 241, 228, ", // Light Green #E8F1E4
      "rgba(255, 245, 230, ", // Warm Cream
    ];

    class Particle {
      constructor(initial = false) {
        this.reset(initial);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20 - Math.random() * 50;
        this.size = Math.random() * 10 + 8; // 8px - 18px
        this.speedY = Math.random() * 0.8 + 0.4; // 0.4 - 1.2 px/frame
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.sway = Math.random() * 1.5 + 0.5;
        this.swaySpeed = Math.random() * 0.02 + 0.01;
        this.swayAngle = Math.random() * Math.PI * 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.45 + 0.25; // 0.25 - 0.7
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        
        // Types: 0 = glyph (♡, ♥, ✦, ❦), 1 = petal, 2 = leaf, 3 = gold dust
        const rand = Math.random();
        if (rand < 0.35) {
          this.type = "glyph";
          this.glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        } else if (rand < 0.6) {
          this.type = "petal";
        } else if (rand < 0.8) {
          this.type = "leaf";
        } else {
          this.type = "gold_dust";
        }
      }

      update() {
        this.swayAngle += this.swaySpeed;
        this.y += this.speedY;
        this.x += Math.sin(this.swayAngle) * this.sway * 0.4 + this.speedX;
        this.rotation += this.rotationSpeed;

        // Desktop gentle mouse repulsion / breeze
        if (!isMobile && hasMouseMoved) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 1.2;
            this.x += (dx / dist) * force * 2;
            this.y += (dy / dist) * force * 0.5;
          }
        }

        // Wrap around horizontally
        if (this.x < -30) this.x = width + 20;
        if (this.x > width + 30) this.x = -20;

        // Reset when passing screen bottom
        if (this.y > height + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `${this.colorPrefix}${this.opacity})`;

        if (this.type === "glyph") {
          ctx.font = `${Math.round(this.size)}px "Cormorant Garamond", serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(this.glyph, 0, 0);
        } else if (this.type === "petal") {
          // Soft curved floral petal
          ctx.beginPath();
          ctx.moveTo(0, -this.size / 2);
          ctx.quadraticCurveTo(this.size / 2, 0, 0, this.size / 2);
          ctx.quadraticCurveTo(-this.size / 2, 0, 0, -this.size / 2);
          ctx.fill();
        } else if (this.type === "leaf") {
          // Delicate mango/betel leaf motif
          ctx.beginPath();
          ctx.moveTo(0, -this.size * 0.6);
          ctx.bezierCurveTo(this.size * 0.4, -this.size * 0.2, this.size * 0.4, this.size * 0.3, 0, this.size * 0.6);
          ctx.bezierCurveTo(-this.size * 0.4, this.size * 0.3, -this.size * 0.4, -this.size * 0.2, 0, -this.size * 0.6);
          ctx.fill();
        } else {
          // Gold dust mote with soft glow
          ctx.beginPath();
          ctx.arc(0, 0, Math.max(1.5, this.size * 0.22), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle(true));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
