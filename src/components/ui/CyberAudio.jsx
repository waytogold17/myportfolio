import React, { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useApp } from "../../context/AppContext";

const content = {
  FR: { signal: "Signal: Stable", stream: "Audio_Flux: " },
  EN: { signal: "Signal: Stable", stream: "Audio_Stream: " },
};

export const CyberAudio = () => {
  // On utilise isMuted et toggleMute du contexte global
  const { lang, isLight, isMuted, toggleMute } = useApp();
  const t = content[lang] || content.FR;
  const audioRef = useRef(
    new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3")
  );

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    // Si isMuted est false (donc son ON par défaut), on essaie de jouer
    if (!isMuted) {
      audio.play().catch(() => {
        console.log("Autoplay bloqué par le navigateur : attente interaction.");
      });
    }

    return () => audio.pause();
  }, []);

  // Synchronisation de l'audio quand isMuted change via le bouton
  useEffect(() => {
    if (isMuted) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  }, [isMuted]);

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 border p-2 font-mono text-[10px] backdrop-blur-md transition-all duration-500 rounded-sm"
      style={{
        backgroundColor: isLight
          ? "rgba(255, 255, 255, 0.85)"
          : "rgba(5, 5, 5, 0.85)",
        borderColor: "var(--primary)", // Utilise ta variable CSS
      }}
    >
      <div
        className="flex flex-col items-end uppercase leading-tight"
        style={{ color: "var(--primary)" }}
      >
        <span className="opacity-70">{t.signal}</span>
        <span className={!isMuted ? "animate-pulse font-bold" : "opacity-30"}>
          {t.stream} {!isMuted ? "ON" : "OFF"}
        </span>
      </div>

      <button
        onClick={toggleMute}
        className="p-2 border transition-all duration-300 hover:scale-110"
        style={{
          borderColor: "var(--primary)",
          color: "var(--primary)",
          backgroundColor: "var(--primary-opacity)",
        }}
      >
        {!isMuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </div>
  );
};
