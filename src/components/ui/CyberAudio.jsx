import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useApp } from "../../context/AppContext";

const content = {
  FR: {
    signal: "Signal: Stable",
    stream: "Audio_Flux: ",
  },
  EN: {
    signal: "Signal: Stable",
    stream: "Audio_Stream: ",
  },
};

export const CyberAudio = () => {
  const { lang, isLight } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const t = content[lang] || content.EN;

  // On utilise une référence pour l'objet Audio afin d'éviter de le recréer à chaque render
  const audioRef = useRef(null);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
      );
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) =>
          console.log("L'interaction utilisateur est requise pour l'audio")
        );
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 border p-2 font-mono text-[10px] backdrop-blur-md transition-all duration-500 rounded-sm"
      style={{
        backgroundColor: isLight
          ? "rgba(255, 255, 255, 0.85)"
          : "rgba(5, 5, 5, 0.85)",
        borderColor: "var(--cyber-primary)",
        color: isLight ? "#008f11" : "var(--cyber-primary)", // Vert plus sombre en Light pour le contraste
      }}
    >
      <div className="flex flex-col items-end uppercase leading-tight">
        <span className="opacity-70">{t.signal}</span>
        <span className={isPlaying ? "animate-pulse font-bold" : "opacity-30"}>
          {t.stream}
          {isPlaying ? "ON" : "OFF"}
        </span>
      </div>

      <button
        onClick={toggle}
        className="p-2 border transition-all duration-300 hover:scale-110"
        style={{
          borderColor: "var(--cyber-primary)",
          backgroundColor: isLight
            ? "rgba(0, 143, 17, 0.05)"
            : "rgba(0, 255, 65, 0.05)",
        }}
      >
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </div>
  );
};
