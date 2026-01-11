import React, { useState, useEffect } from "react"; // ✅ useEffect ajouté
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Globe } from "lucide-react"; // ✅ Icônes ajoutées
import { useApp } from "../../context/AppContext"; // ✅ Import présent

// ✅ CONTENT AJOUTÉ (manquant !)
const content = {
  FR: {
    navTitle: "SYSTEME_NAVIGATION",
    status: "ACCÈS_AUTORISÉ",
    links: [
      { name: "Projets", href: "#projects" },
      { name: "Compétences", href: "#skills" },
      { name: "Certifications", href: "#certifications" },
      { name: "Expériences", href: "#experiences" },
      { name: "Contact", href: "#contact" },
    ],
  },
  EN: {
    navTitle: "SYSTEM_NAVIGATION",
    status: "AUTHORIZED_ACCESS",
    links: [
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Certifications", href: "#certifications" },
      { name: "Experiences", href: "#experiences" },
      { name: "Contact", href: "#contact" },
    ],
  },
};

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, isLight, toggleTheme, toggleLang } = useApp(); // ✅ OK maintenant
  const t = content[lang] || content.FR;

  // ✅ SCROLL LOCK
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuColors = {
    bg: isLight ? "#ffffff" : "#0a0a0a",
    text: isLight ? "#1f2937" : "#ffffff",
    textMuted: isLight ? "#64748b" : "#9ca3af",
    border: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)",
    primaryBorder: isLight ? "rgba(5,150,105,0.3)" : "rgba(0,255,65,0.6)",
  };

  return (
    <div className="md:hidden relative z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 rounded backdrop-blur-sm hover:bg-white/5 transition-all"
        style={{ color: menuColors.text }}
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[99] bg-black"
              style={{ backgroundColor: "#000000" }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-[85vw] max-w-sm z-[100] flex flex-col shadow-2xl"
              style={{
                backgroundColor: menuColors.bg,
                borderLeft: `2px solid ${menuColors.primaryBorder}`,
                color: menuColors.text,
              }}
            >
              {/* Header */}
              <div
                className="p-6 pb-4 border-b"
                style={{ borderColor: menuColors.border }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <span
                      className="text-[11px] font-mono tracking-[2px] uppercase font-bold"
                      style={{ color: "#10b981" }}
                    >
                      {t.navTitle}
                    </span>
                    <span
                      className="text-[9px] font-mono uppercase tracking-[1px]"
                      style={{ color: menuColors.textMuted }}
                    >
                      {t.status}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 hover:backdrop-blur-sm transition-all"
                    style={{ color: menuColors.text }}
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Barre réglages - AJOUTÉE */}
              <div className="p-6 pt-0">
                <div
                  className="flex items-center justify-between p-4 border rounded-lg backdrop-blur-sm"
                  style={{
                    borderColor: menuColors.border,
                    backgroundColor: isLight
                      ? "rgba(0,0,0,0.02)"
                      : "rgba(255,255,255,0.03)",
                  }}
                >
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/5 transition-all text-sm font-black uppercase tracking-wider"
                    style={{ color: menuColors.text }}
                  >
                    {isLight ? <Moon size={16} /> : <Sun size={16} />}
                    {isLight ? "Dark" : "Light"}
                  </button>

                  <div
                    className="w-[1px] h-6"
                    style={{ backgroundColor: menuColors.border }}
                  />

                  <button
                    onClick={() => toggleLang(lang === "FR" ? "EN" : "FR")}
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/5 transition-all text-sm font-black uppercase tracking-wider"
                    style={{ color: menuColors.text }}
                  >
                    <Globe size={14} />
                    {lang === "FR" ? "EN" : "FR"}
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6 pb-8 space-y-6 overflow-y-auto">
                {t.links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 pl-2 text-xl font-black uppercase tracking-widest hover:text-[#10b981] transition-all duration-300 hover:pl-6 border-l-4 border-transparent hover:border-l-[#10b981] group"
                    style={{ color: menuColors.text }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <div
                className="p-6 border-t"
                style={{ borderColor: menuColors.border }}
              >
                <div
                  className="flex justify-between items-center text-xs font-mono"
                  style={{ color: menuColors.textMuted }}
                >
                  <div className="leading-tight">
                    Codename: Joyboy
                    <br />
                    Port: 5173
                  </div>
                  <div
                    className="w-10 h-10 border-2 rounded-full flex items-center justify-center p-1"
                    style={{ borderColor: menuColors.border }}
                  >
                    <div className="w-3 h-3 bg-[#10b981] rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
