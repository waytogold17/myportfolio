import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TerminalBoot = ({ text, delay = 0.05 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(timer);
        setIsComplete(true);
      }
    }, delay * 1000);
    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <div className="font-mono text-cyber-primary">
      <span>
        {"> "}
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 bg-cyber-primary ml-1 align-middle"
      />
    </div>
  );
};

export default TerminalBoot;
