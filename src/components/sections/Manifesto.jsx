import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../../context/AppContext";

const content = {
  FR: {
    subtitle: "// Mes Valeurs",
    title: "Pourquoi me recruter ?",
    values: [
      {
        number: "01",
        title: "Dualité Technique",
        text: "L'alliance du Réseau, du Développement et de la Cybersécurité offensive pour une vision 360° des menaces.",
      },
      {
        number: "02",
        title: "Équilibre Humain",
        text: "Un esprit sain dans un corps sain. Le sport et la culture geek comme moteurs d'endurance et d'imagination.",
      },
      {
        number: "03",
        title: "Éthique Intègre",
        text: "La déontologie avant l'opportunisme. Une loyauté et une moralité bâties sur un engagement professionnel strict.",
      },
    ],
    quote:
      "Quoi qu'il arrive, ne perdez jamais espoir face aux adversités du monde qui vous entoure ! Soyez assez forts pour pouvoir rire de tout.",
    author: "Eiichiro Oda",
  },
  EN: {
    subtitle: "// Core Values",
    title: "Why recruit me?",
    values: [
      {
        number: "01",
        title: "Technical Duality",
        text: "Blending Network, Development and offensive Cybersecurity for a 360° threat vision.",
      },
      {
        number: "02",
        title: "Human Balance",
        text: "Healthy mind in a healthy body. Sports and geek culture as drivers of endurance and imagination.",
      },
      {
        number: "03",
        title: "Integrity & Ethics",
        text: "Deontology before opportunism. Loyalty and morality built on strict professional commitment.",
      },
    ],
    quote:
      "No matter what happens, never lose hope in the face of the adversities surrounding you! Be strong enough to laugh at everything.",
    author: "Eiichiro Oda",
  },
};

const ManifestoItem = ({ number, title, text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative p-8 cyber-panel transition-all duration-500 hover:border-cyber-primary/50 hover:bg-cyber-primary/[0.03]"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="scan-line" />
      </div>

      <div className="relative z-10 text-center">
        {/* OPACITY ADAPTÉE AU THÈME */}
        <h3
          className="text-6xl font-black italic mb-4 opacity-10 group-hover:opacity-30 group-hover:text-cyber-primary transition-all duration-700"
          style={{ color: "var(--text)" }}
        >
          {number}
        </h3>
        <h4
          className="text-xl font-bold mb-4 uppercase tracking-tighter group-hover:text-cyber-primary transition-colors"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h4>
        {/* BORDURE DYNAMIQUE */}
        <div
          className="h-[2px] w-12 mx-auto mb-6 group-hover:w-24 group-hover:bg-cyber-primary transition-all duration-500"
          style={{ backgroundColor: "var(--border)" }}
        />
        <p
          className="text-sm font-mono italic leading-relaxed transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          "{text}"
        </p>
      </div>
    </motion.div>
  );
};

export const Manifesto = () => {
  const { lang, isLight } = useApp();
  const t = content[lang] || content.FR;

  return (
    <section id="whyme" className="py-32 relative overflow-hidden">
      {/* Fond décoratif adaptatif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-xs font-mono text-cyber-primary tracking-[0.5em] uppercase mb-4">
            {t.subtitle}
          </h2>
          <div
            className="section-title text-3xl font-black uppercase italic"
            style={{ color: "var(--text)" }}
          >
            {t.title}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.values.map((item) => (
            <ManifestoItem
              key={item.number}
              number={item.number}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center max-w-3xl mx-auto border-t pt-12"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-lg italic font-mono leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            "{t.quote}"
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] w-8 bg-cyber-primary/30" />
            <span className="text-cyber-primary font-bold tracking-widest text-xs uppercase">
              {t.author}
            </span>
            <div className="h-[1px] w-8 bg-cyber-primary/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
