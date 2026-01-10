import React, { useState, useRef } from "react";
import { Volume2, VolumeX, Radio } from "lucide-react";

export const CyberAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(
    new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3")
  ); // Remplace par ton lien
  audioRef.current.loop = true;

  const toggle = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-black/80 border border-cyber-primary/30 p-2 font-mono text-[10px] text-cyber-primary backdrop-blur-md">
      <div className="flex flex-col items-end uppercase">
        <span>Signal: Stable</span>
        <span className={isPlaying ? "animate-pulse" : "opacity-30"}>
          Audio_Stream: {isPlaying ? "ON" : "OFF"}
        </span>
      </div>
      <button
        onClick={toggle}
        className="p-2 border border-cyber-primary/20 hover:bg-cyber-primary/10 transition-all"
      >
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </div>
  );
};
