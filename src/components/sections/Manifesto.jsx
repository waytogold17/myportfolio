import React from "react";
import { motion } from "framer-motion";

const ManifestoItem = ({ number, title, text, citation }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative p-8 cyber-panel transition-all duration-500 hover:border-cyber-primary/50 hover:bg-cyber-primary/[0.03]"
    >
      {/* Effet de scan local au survol */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="scan-line" />
      </div>

      <div className="relative z-10 text-center">
        <h3 className="text-6xl font-black italic mb-4 opacity-5 group-hover:opacity-20 group-hover:text-cyber-primary transition-all duration-700">
          {number}
        </h3>
        <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter group-hover:text-cyber-primary transition-colors">
          {title}
        </h4>
        <div className="h-[2px] w-12 bg-white/10 mx-auto mb-6 group-hover:w-24 group-hover:bg-cyber-primary transition-all duration-500" />
        <p className="text-sm text-gray-500 font-mono italic leading-relaxed group-hover:text-gray-300 transition-colors">
          "{text}"
        </p>
      </div>
    </motion.div>
  );
};

export const Manifesto = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Fond décoratif subtil pour cette section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-xs font-mono text-cyber-primary tracking-[0.5em] uppercase mb-4">
            // Mes Valeurs
          </h2>
          <div className="text-3xl font-black uppercase italic">
            Pourquoi me recruter ?
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ManifestoItem
            number="01"
            title="Dualité Technique"
            text="L'alliance du Réseau, du Développement et de la Cybersécurité offensive pour une vision 360° des menaces."
          />
          <ManifestoItem
            number="02"
            title="Équilibre Humain"
            text="Un esprit sain dans un corps sain. Le sport et la culture geek comme moteurs d'endurance et d'imagination."
          />
          <ManifestoItem
            number="03"
            title="Éthique Intègre"
            text="La déontologie avant l'opportunisme. Une loyauté et une moralité bâties sur un engagement professionnel strict."
          />
        </div>

        {/* Citation Finale Animée */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center max-w-3xl mx-auto border-t border-white/5 pt-12"
        >
          <p className="text-lg italic text-gray-400 font-mono leading-relaxed">
            "Quoi qu’il arrive, ne perdez jamais espoir face aux adversités du
            monde qui vous entoure ! Soyez assez forts pour pouvoir rire de
            tout."
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] w-8 bg-cyber-primary/30" />
            <span className="text-cyber-primary font-bold tracking-widest text-xs uppercase">
              Eiichiro Oda
            </span>
            <div className="h-[1px] w-8 bg-cyber-primary/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
