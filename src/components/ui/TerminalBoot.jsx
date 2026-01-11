import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useApp } from "../../context/AppContext";

const TerminalBoot = ({ text, delay = 0.05 }) => {
  const [displayText, setDisplayText] = useState("");
  const { isLight } = useApp(); // On récupère l'état du thème

  useEffect(() => {
    let i = 0;
    // On réinitialise le texte si la prop 'text' change (utile lors du switch de langue)
    setDisplayText("");

    const timer = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(timer);
      }
    }, delay * 1000);
    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <div
      className="font-mono transition-colors duration-300"
      style={{
        // En mode Light, on peut assombrir légèrement le vert pour le contraste
        color: isLight ? "#008f11" : "var(--cyber-primary)",
      }}
    >
      <span className="font-bold">
        {"> "}
        {displayText}
      </span>

      {/* Le curseur clignotant */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 ml-1 align-middle"
        style={{
          backgroundColor: isLight ? "#008f11" : "var(--cyber-primary)",
        }}
      />
    </div>
  );
};

export default TerminalBoot;
