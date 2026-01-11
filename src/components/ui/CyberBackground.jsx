// src/components/ui/CyberBackground.jsx
import React from "react";
import { motion } from "framer-motion";

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden pointer-events-none">
      {/* Grille : backgroundSize réduit sur mobile pour plus de finesse */}
      <div
        className="absolute inset-0 opacity-[0.15] md:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Radar : Taille réduite sur mobile (w-[300px]) */}
      <motion.div
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: [1, 3], opacity: 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-cyber-primary rounded-full opacity-20"
      />

      {/* Points de données : On en affiche moins sur mobile pour la performance */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1.5px] h-[1.5px] bg-cyber-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)]" />
    </div>
  );
};

export default CyberBackground;
