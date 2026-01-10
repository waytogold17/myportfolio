import React from "react";
import { motion } from "framer-motion";

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden">
      {/* 1. Grille de base plus marquée */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. L'EFFET RADAR (L'impulsion circulaire) */}
      <motion.div
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{
          scale: 4,
          opacity: 0,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyber-primary rounded-full"
        style={{ boxShadow: "0 0 50px rgba(0, 255, 65, 0.2)" }}
      />

      {/* 3. Ligne de SCAN horizontale (plus rapide et nette) */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-cyber-primary opacity-30 shadow-[0_0_15px_rgba(0,255,65,0.8)] z-0"
      />

      {/* 4. Points de données (Pixels aléatoires qui clignotent) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-cyber-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* 5. Vignettage (Assombrit les bords pour focus le centre) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};

export default CyberBackground;
