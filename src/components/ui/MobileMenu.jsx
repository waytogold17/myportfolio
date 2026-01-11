import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Bouton Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-cyber-primary p-2"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl border-l border-cyber-primary/20 flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-[10px] font-mono text-cyber-primary tracking-[0.3em]">
                SYSTEM_NAVIGATION
              </span>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase italic hover:text-cyber-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto text-[10px] font-mono text-gray-500 italic">
              [ STATUS: AUTHORIZED_ACCESS ]<br />[ PORT: 5173 ]
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
