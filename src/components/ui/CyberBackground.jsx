import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "../../context/AppContext";

const CyberBackground = () => {
  const { isLight } = useApp();
  const [hasPulsed, setHasPulsed] = useState(false);

  useEffect(() => {
    setHasPulsed(false);
    const timer = setTimeout(() => {
      setHasPulsed(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-700"
      style={{
        backgroundColor: isLight ? "#f8f9fa" : "#050505",
      }}
    >
      {/* Grille responsive */}
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
          backgroundSize: "clamp(20px, 5vw, 30px) clamp(20px, 5vw, 30px)", // ✅ RESPONSIVE
        }}
      />

      {/* ✅ RADAR RESPONSIF MULTI-DEVICE */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 border rounded-full"
        style={{
          top: "clamp(10%, 15vh, 25%)", // ✅ Haut adaptatif (mobile:10%, desktop:25%)
          width: "clamp(200px, 40vw, 500px)", // ✅ Largeur responsive
          height: "clamp(200px, 40vw, 500px)", // ✅ Hauteur responsive
          borderColor: isLight ? "rgba(0,0,0,0.1)" : "var(--cyber-primary)",
          opacity: isLight ? 0.4 : 0.2,
        }}
        initial={{ scale: 0, opacity: 0.8 }}
        animate={
          hasPulsed
            ? { scale: 3, opacity: 0 }
            : { scale: [1, 3], opacity: [0.8, 0] }
        }
        transition={{
          duration: 12,
          ease: "easeOut",
        }}
      />

      {/* Points de données responsive */}
      <div className="absolute inset-0">
        {[...Array(isLight ? 15 : 10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: "clamp(1px, 0.4vw, 1.5px)", // ✅ Taille responsive
              height: "clamp(1px, 0.4vw, 1.5px)",
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

      {/* Vignettage adaptatif */}
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
