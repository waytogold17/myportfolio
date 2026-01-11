import React from "react";
import { Heart, Zap, Coffee, Brain, ShieldAlert, Terminal } from "lucide-react";
import { useApp } from "../../context/AppContext"; // ✅ AJOUTÉ

const content = {
  FR: {
    title: "Soft_Skills_Log",
    subtitle: "// COMPÉTENCES_COMPORTEMENTALES",
    traits: [
      {
        title: "Écoute active",
        desc: "Abilité à observer et à comprendre l'atmosphère et le ressenti des collaborateurs. Capacité d'intégration rapide.",
        icon: Heart,
      },
      {
        title: "Sang-Froid",
        desc: "Gestion d'incidents et résilience face aux situations critiques ou conflictuelles.",
        icon: Zap,
      },
      {
        title: "Éthique & Déontologie",
        desc: "Moralité adaptée à la réalité des opérations couplée à un respect strict de la confidentialité.",
        icon: ShieldAlert,
      },
      {
        title: "Curiosité Culturelle",
        desc: "Inspiré par la culture asiatique et le sport pour une créativité constante.",
        icon: Brain,
      },
    ],
  },
  EN: {
    title: "Soft_Skills_Log",
    subtitle: "// BEHAVIORAL_COMPETENCIES",
    traits: [
      {
        title: "Active Listening",
        desc: "Ability to observe and understand the atmosphere and feelings of colleagues. Rapid integration capability.",
        icon: Heart,
      },
      {
        title: "Cool Under Pressure",
        desc: "Incident management and resilience in critical or conflict situations.",
        icon: Zap,
      },
      {
        title: "Ethics & Deontology",
        desc: "Morality suited to the reality of operations coupled with strict confidentiality respect.",
        icon: ShieldAlert,
      },
      {
        title: "Cultural Curiosity",
        desc: "Inspired by Asian culture and sports for constant creativity.",
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
      <div className="flex items-center gap-4 mb-16">
        <Terminal className="w-8 h-8 text-cyber-primary" />
        <h2
          className="section-title text-3xl font-black uppercase tracking-tighter"
          style={{ color: "var(--text)" }}
        >
          {t.title} {/* ✅ DYNAMIQUE */}
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
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
