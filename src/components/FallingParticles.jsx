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
    // Significantly increased particle count for lush yet elegant heart density
    const PARTICLE_COUNT = isMobile ? 38 : 76;

    // Mouse tracker for desktop gentle breeze effect
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

    // Rich, Dark Romantic Wedding Palette: Deep Crimson, Ruby Rose, Wine Burgundy, Dark Antique Gold
    const colors = [
      // Deep Crimson & Ruby Rose tones
      "rgba(168, 42, 60, ",   // Deep Crimson Red
      "rgba(182, 52, 70, ",   // Rich Ruby Rose
      "rgba(152, 32, 50, ",   // Wine Burgundy
      "rgba(195, 60, 78, ",   // Vibrant Rose Red
      "rgba(140, 28, 46, ",   // Deep Velvet Maroon
      // Dark Antique Gold & Warm Bronze tones
      "rgba(166, 124, 46, ",  // #A67C2E Dark Gold
      "rgba(142, 98, 28, ",   // Deep Bronze Gold
      "rgba(180, 130, 42, ",  // Rich Warm Gold
      "rgba(128, 85, 20, ",   // Antique Russet Gold
      // Deep Forest Emerald accent
      "rgba(39, 66, 54, ",    // #274236 Wedding Forest
    ];

    // Delicate typography heart glyphs
    const glyphs = ["♡", "♥", "✦"];

    // Helper: Draw smooth bezier heart shape centered at (0, 0)
    const drawHeart = (c, size, isOutline = false) => {
      const s = size * 0.45;
      const yOff = -s * 0.2; // center centroid

      c.beginPath();
      c.moveTo(0, yOff - s * 0.35);
      // Left upper lobe
      c.bezierCurveTo(-s * 0.55, yOff - s * 0.95, -s * 1.05, yOff - s * 0.35, -s * 1.05, yOff + s * 0.1);
      // Left bottom curve to bottom point
      c.bezierCurveTo(-s * 1.05, yOff + s * 0.6, -s * 0.4, yOff + s * 1.0, 0, yOff + s * 1.35);
      // Right bottom curve from bottom point
      c.bezierCurveTo(s * 0.4, yOff + s * 1.0, s * 1.05, yOff + s * 0.6, s * 1.05, yOff + s * 0.1);
      // Right upper lobe back to center cleft
      c.bezierCurveTo(s * 1.05, yOff - s * 0.35, s * 0.55, yOff - s * 0.95, 0, yOff - s * 0.35);
      c.closePath();

      if (isOutline) {
        c.lineWidth = Math.max(1.5, size * 0.14);
        c.stroke();
      } else {
        c.fill();
      }
    };

    class Particle {
      constructor(initial = false) {
        this.reset(initial);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20 - Math.random() * 50;
        // Small, subtle, elegant hearts (7px - 13px)
        this.size = Math.random() * 6 + 7.5;
        this.speedY = Math.random() * 0.55 + 0.35; // Gentle downward float
        this.speedX = (Math.random() - 0.5) * 0.32;
        this.sway = Math.random() * 1.1 + 0.35;
        this.swaySpeed = Math.random() * 0.015 + 0.008;
        this.swayAngle = Math.random() * Math.PI * 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.014; // Very subtle rotation
        // Much darker and crisp opacity (0.65 - 0.95)
        this.opacity = Math.random() * 0.30 + 0.65;
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];

        // Particle types: filled hearts (50%), outline hearts (25%), serif heart glyphs (15%), gold dust (10%)
        const rand = Math.random();
        if (rand < 0.5) {
          this.type = "heart_filled";
        } else if (rand < 0.75) {
          this.type = "heart_outline";
        } else if (rand < 0.9) {
          this.type = "glyph";
          this.glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        } else {
          this.type = "gold_dust";
        }
      }

      update() {
        this.swayAngle += this.swaySpeed;
        this.y += this.speedY;
        this.x += Math.sin(this.swayAngle) * this.sway * 0.35 + this.speedX;
        this.rotation += this.rotationSpeed;

        // Desktop gentle mouse repulsion / breeze
        if (!isMobile && hasMouseMoved) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 110;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 1.1;
            this.x += (dx / dist) * force * 1.8;
            this.y += (dy / dist) * force * 0.4;
          }
        }

        // Horizontal wrap around
        if (this.x < -30) this.x = width + 20;
        if (this.x > width + 30) this.x = -20;

        // Reset when passing screen bottom to continuously recycle
        if (this.y > height + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        const fillStyle = `${this.colorPrefix}${this.opacity})`;
        ctx.fillStyle = fillStyle;
        ctx.strokeStyle = fillStyle;

        if (this.type === "heart_filled") {
          drawHeart(ctx, this.size, false);
        } else if (this.type === "heart_outline") {
          drawHeart(ctx, this.size, true);
        } else if (this.type === "glyph") {
          ctx.font = `${Math.round(this.size)}px "Cormorant Garamond", serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(this.glyph, 0, 0);
        } else {
          // Tiny subtle champagne gold stardust
          ctx.beginPath();
          ctx.arc(0, 0, Math.max(1.2, this.size * 0.18), 0, Math.PI * 2);
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
      className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
