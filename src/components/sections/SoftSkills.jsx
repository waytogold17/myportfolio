import React from "react";
import { Heart, Zap, Coffee, Brain, ShieldAlert, Terminal } from "lucide-react";
import { useApp } from "../../context/AppContext"; // ✅ AJOUTÉ

const content = {
  FR: {
    title: "Soft_Skills_Log",
    subtitle: "//CE_QUI_NE_S'APPREND_PAS_DANS_LES_LIVRES",
    traits: [
      {
        title: "Écoute active",
        desc: "J'ai une facilité à interagir avec plusieurs parties , me permettant plus loin de m’adapter rapidement à de nouveaux environnements.",
        icon: Heart,
      },
      {
        title: "Sang-Froid",
        desc: "Malgré les urgences soudaines ou les imprévus ,je préfère agir de manière pragmatique  plutôt qu'avec  précipitation..",
        icon: Zap,
      },
      {
        title: "Éthique & confiance",
        desc: "La confiance est ma base de travail. Manipuler des données sensibles demande bien une honnêteté absolue et une discrétion à toute épreuve.",
        icon: ShieldAlert,
      },
      {
        title: "Curiosité naturelle",
        desc: "Je suis assez motivé par l'envie d'apprendre de nouvelles choses . Que ce soit une nouvelle techno ou une culture différente, je cherche toujours l'étincelle qui booste la créativit",
        icon: Brain,
      },
    ],
  },
  EN: {
    title: "Soft_Skills_Log",
    subtitle: "//THINGS_YOU_CAN'T_LEARN_FROM_BOOKS",
    traits: [
      {
        title: "Active Listening",
        desc: "I have a knack for interacting with multiple parties, allowing me to quickly adapt to new environments.",
        icon: Heart,
      },
      {
        title: "Cool Under Pressure",
        desc: "Despite sudden emergencies or unforeseen events ,I prefer to act pragmatically  rather than  hastily.",
        icon: Zap,
      },
      {
        title: "Ethics & Trust",
        desc: "Trust is the foundation of my work. Handling sensitive data requires absolute honesty and unwavering discretion.",
        icon: ShieldAlert,
      },
      {
        title: "Cultural Curiosity",
        desc: "I am highly motivated by the desire to learn new things. Whether it's a new technology or a different culture, I am always looking for that spark that boosts creativity",
        icon: Brain,
      },
    ],
  },
};

export const SoftSkills = () => {
  const { lang } = useApp(); // ✅ UTILISÉ
  const t = content[lang];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header DYNAMIQUE */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-16 border-b border-white/10 pb-6">
        <div className="flex items-center gap-4">
          <Terminal className="w-8 h-8 text-cyber-primary" />
          <div className="flex flex-col">
            <h2 className="text-xs font-mono text-cyber-primary uppercase tracking-[0.3em] mb-1">
              {t.subtitle}
            </h2>
            <h2
              className="section-title text-3xl md:text-5xl font-black uppercase tracking-tighter"
              style={{ color: "var(--text)" }}
            >
              {t.title}
            </h2>
          </div>
        </div>

        {/* Cette ligne décorative ne s'affichera que sur PC pour éviter de charger le mobile */}
        <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-cyber-primary/20 via-transparent to-transparent ml-4 mb-2"></div>
      </div>

      {/* Grille DYNAMIQUE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.traits.map((trait, i) => (
          <div
            key={i}
            className="cyber-panel p-6 border-t-2 border-t-white/5 group hover:border-t-cyber-primary hover:bg-cyber-primary/[0.03] transition-all duration-300"
          >
            {/* Icône DYNAMIQUE */}
            <div className="flex justify-center mb-6">
              <trait.icon className="w-10 h-10 text-cyber-primary opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>

            <h4
              className="text-sm font-black uppercase mb-3 tracking-tighter text-center"
              style={{ color: "var(--text)" }}
            >
              {trait.title} {/* ✅ DYNAMIQUE */}
            </h4>

            <p
              className="text-[11px] font-mono leading-relaxed text-center"
              style={{ color: "var(--text-muted)" }} // ✅ var(--text-muted)
            >
              {trait.desc} {/* ✅ DYNAMIQUE */}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
