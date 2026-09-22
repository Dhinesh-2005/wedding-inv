import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function MusicPlayer({ isPlaying, onToggle }) {
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const oscillatorNodesRef = useRef([]);
  const [audioError, setAudioError] = useState(false);

  // Fallback synthesizer using Web Audio API for graceful ambient chord
  const startFallbackAudio = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }

      // Stop previous
      stopFallbackAudio();

      // Create gentle meditative Tanpura-style chord (Sa - Pa - Sa' : 216Hz, 324Hz, 432Hz)
      const frequencies = [216, 324, 432];
      const masterGain = audioContextRef.current.createGain();
      masterGain.gain.setValueAtTime(0.06, audioContextRef.current.currentTime);
      masterGain.connect(audioContextRef.current.destination);

      oscillatorNodesRef.current = frequencies.map((freq) => {
        const osc = audioContextRef.current.createOscillator();
        const gain = audioContextRef.current.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audioContextRef.current.currentTime);
        gain.gain.setValueAtTime(0.3, audioContextRef.current.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        return osc;
      });
    } catch (e) {
      console.log("Web audio fallback unavailable", e);
    }
  };

  const stopFallbackAudio = () => {
    if (oscillatorNodesRef.current.length > 0) {
      oscillatorNodesRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      oscillatorNodesRef.current = [];
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // File not found or blocked: use fallback audio
          setAudioError(true);
          startFallbackAudio();
        });
      }
    } else {
      audio.pause();
      stopFallbackAudio();
    }

    return () => {
      stopFallbackAudio();
    };
  }, [isPlaying]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        loop
        preload="none"
        onError={() => setAudioError(true)}
      />

      {/* Floating Music Control */}
      <button
        onClick={onToggle}
        className={`fixed top-20 right-4 z-40 px-3.5 py-1.5 rounded-full border shadow-md backdrop-blur-md flex items-center gap-2 text-xs font-serif font-bold transition-all duration-300 cursor-pointer select-none ${
          isPlaying
            ? "bg-[#274236] text-[#FFFDF7] border-[#C9A24A] shadow-[#C9A24A]/30 scale-105"
            : "bg-[#FFFDF7]/90 text-[#274236] border-[#C9A24A]/40 hover:border-[#C9A24A]"
        }`}
        title={isPlaying ? "Mute Background Music" : "Play Wedding Music"}
        aria-label="Toggle background music"
      >
        <span className="text-sm leading-none animate-pulse">♫</span>
        <span className="tracking-wider uppercase font-sans text-[10px]">
          {isPlaying ? "MUSIC ON" : "MUSIC OFF"}
        </span>
      </button>
    </>
  );
}
