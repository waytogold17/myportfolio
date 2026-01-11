// src/components/sections/Hero.jsx
import React from "react";
import TerminalBoot from "../ui/TerminalBoot";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-20">
      <div className="mb-6">
        <TerminalBoot
          text="Initializing Joyboy onboarding protocol..."
          delay={0.03}
        />
      </div>

      {/* Taille réduite sur mobile (text-5xl) et massive sur PC (md:text-9xl) */}
      <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase leading-[0.85] mb-4">
        EXPERT <br />
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
        >
          CYBER
        </span>
      </h1>

      <div className="max-w-xl mt-6 md:mt-10 border-l-2 border-cyber-primary pl-6">
        <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed">
          Je me nomme <span className="text-white font-bold">Joseph GOMEZ</span>
          . Passionné par la cybersécurité et la technologie. Expertise ciblée
          en sécurité réseau, analyse malware et développement sécurisé.
        </p>
      </div>

      <div className="mt-12 md:mt-20 animate-bounce opacity-20">
        <div className="w-[1px] h-12 bg-white mx-auto"></div>
      </div>
    </section>
  );
};
