import { useState, useRef, useEffect } from "react";

export const useAudio = () => {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element for background music
    const audio = new Audio("/sololevelingsoundtrack.m4a"); // match your filename
    audio.loop = true;
    audio.volume = 0.12; // low volume — sounds like bg
    audioRef.current = audio;

    // Try to play — will be blocked until user clicks anything
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Start music on first user interaction
  useEffect(() => {
    const startOnInteraction = () => {
      if (audioRef.current && !muted) {
        audioRef.current.play().catch(() => {});
      }
      // Remove after first interaction
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
    };
    window.addEventListener("click", startOnInteraction);
    window.addEventListener("keydown", startOnInteraction);
    return () => {
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
    };
  }, [muted]);

  const toggle = () => {
    setMuted((m) => {
      const next = !m;
      if (audioRef.current) {
        if (next) {
          audioRef.current.pause();
        } else {
          audioRef.current.play().catch(() => {});
        }
      }
      return next;
    });
  };

  return { muted, toggle };
};
