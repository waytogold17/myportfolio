import React from "react";
import { motion } from "framer-motion";

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-cyber-black overflow-hidden">
      {/* 1. Couche de Grille */}
      <div className="absolute inset-0 cyber-grid z-0" />

      {/* 2. Vignette et Lueur centrale */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.05)_0%,transparent_70%)] z-0" />

      {/* 3. Scanlines (Effet CRT) */}
      <div className="scanlines" />

      {/* 4. Contenu de l'application */}
      <div className="relative z-10">{children}</div>

      {/* 5. HUD Décoratif (Optionnel - Coins de l'écran) */}
    </div>
  );
};

export default MainLayout;
