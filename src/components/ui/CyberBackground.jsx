// src/components/ui/CyberBackground.jsx
import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../../context/AppContext"; // Import indispensable

const CyberBackground = () => {
  const { isLight } = useApp();

  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-700"
      style={{
        // Le fond devient blanc cassé/gris très clair en mode Light
        backgroundColor: isLight ? "#f8f9fa" : "#050505",
      }}
    >
      {/* Grille : On change la couleur de la grille pour qu'elle soit visible sur blanc */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: isLight ? 0.08 : 0.15,
          backgroundImage: `
            linear-gradient(to right, ${
              isLight ? "rgba(0,0,0,0.2)" : "rgba(0, 255, 65, 0.2)"
            } 1px, transparent 1px),
            linear-gradient(to bottom, ${
              isLight ? "rgba(0,0,0,0.2)" : "rgba(0, 255, 65, 0.2)"
            } 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Radar : Couleur adaptée */}
      <motion.div
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: [1, 3], opacity: 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border rounded-full"
        style={{
          borderColor: isLight ? "rgba(0,0,0,0.1)" : "var(--cyber-primary)",
          opacity: isLight ? 0.4 : 0.2,
        }}
      />

      {/* Points de données (Pixels de bruit) */}
      <div className="absolute inset-0">
        {[...Array(isLight ? 15 : 10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1.5px] h-[1.5px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: isLight ? "#000" : "var(--cyber-primary)",
            }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Vignettage (L'ombre sur les bords) : On l'inverse en mode Light pour un effet de focus */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: isLight
            ? "radial-gradient(circle at center, transparent 40%, rgba(255,255,255,0.8) 100%)"
            : "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.9) 100%)",
        }}
      />
    </div>
  );
};

export default CyberBackground;
