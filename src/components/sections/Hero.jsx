// src/components/sections/Hero.jsx
import React from "react";
import TerminalBoot from "../ui/TerminalBoot";
import { useApp } from "../../context/AppContext";

const content = {
  FR: {
    boot: "Initialisation du protocole d'embarquement...",
    title: "EXPERT",
    subtitle: "CYBER",
    name: "Joseph GOMEZ ",
    desc: "Passionné par la cybersécurité et la technologie. Expertise ciblée en sécurité réseau, analyse malware et développement sécurisé.",
  },
  EN: {
    boot: "Initializing onboarding protocol...",
    title: "CYBER",
    subtitle: "EXPERT",
    name: "Joseph GOMEZ ",
    desc: "Cybersecurity and technology enthusiast. Focused expertise in network security, malware analysis, and secure development.",
  },
};

export const Hero = () => {
  const { lang, isLight } = useApp();
  const t = content[lang];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-20">
      <div className="mb-6">
        {/* On ajoute une clé unique basée sur la langue pour relancer l'animation au changement de langue */}
        <TerminalBoot key={lang} text={t.boot} delay={0.03} />
      </div>

      <h1 className="hero-title font-black uppercase mb-4">
        {t.title} <br />
        <span
          className="text-transparent"
          style={{
            // Correction ici : on utilise des guillemets pour les valeurs CSS
            WebkitTextStroke: isLight
              ? "1px var(--text)"
              : "1px rgba(255,255,255,0.3)",
          }}
        >
          {t.subtitle}
        </span>
      </h1>

      <div className="max-w-xl mt-6 md:mt-10 border-l-2 border-cyber-primary pl-6">
        {/* Suppression du style inline complexe, on utilise les variables CSS définies dans index.css */}
        <p
          className="font-mono text-xs md:text-sm leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {lang === "FR" ? "Je m'appelle " : "I'm"}
          {"  "}
          <span className="font-bold" style={{ color: "var(--text)" }}>
            {t.name}
          </span>
          .{t.desc}
        </p>
      </div>

      <div className="mt-12 md:mt-20 animate-bounce opacity-20">
        <div
          className="w-[1px] h-12 bg-current mx-auto"
          style={{ backgroundColor: "var(--text)" }}
        ></div>
      </div>
    </section>
  );
};
