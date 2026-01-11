import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { useApp } from "../../context/AppContext";

export const Footer = () => {
  const { isLight, lang } = useApp();
  const year = new Date().getFullYear();

  const footerContent = {
    FR: {
      status: "SYSTÈME_OPÉRATIONNEL",
      rights: "TOUS DROITS RÉSERVÉS",
      links: "LIENS_EXTERNES",
      contact: "COMMUNICATION",
    },
    EN: {
      status: "SYSTEM_OPERATIONAL",
      rights: "ALL RIGHTS RESERVED",
      links: "EXTERNAL_LINKS",
      contact: "COMMUNICATION",
    },
  };

  const t = footerContent[lang] || footerContent.FR;

  return (
    <footer
      className="mt-20 border-t border-cyber-primary/20 py-12 px-6 font-mono transition-colors duration-300"
      style={{
        backgroundColor: isLight
          ? "rgba(0,0,0,0.02)"
          : "rgba(255,255,255,0.01)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* COLONNE 1 : IDENTITÉ & STATUS */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-cyber-primary">
            <ShieldCheck size={20} />
            <span className="font-black tracking-tighter text-lg italic">
              JG_PORTFOLIO v4.0
            </span>
          </div>
          <div className="space-y-1">
            <p
              className="text-[10px] opacity-50 uppercase"
              style={{ color: "var(--text)" }}
            >
              {t.status}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyber-primary animate-pulse rounded-full" />
              <span
                className="text-[10px] font-bold"
                style={{ color: "var(--text)" }}
              >
                LATENCY: 24ms
              </span>
            </div>
          </div>
        </div>

        {/* COLONNE 2 : NAVIGATION RAPIDE */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-black text-cyber-primary tracking-[0.2em] uppercase">
            {t.links}
          </h4>
          <div className="flex flex-col gap-2 text-xs">
            <a
              href="#projects"
              className="hover:text-cyber-primary transition-colors uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              {">"} Projects_Archive
            </a>
            <a
              href="#skills"
              className="hover:text-cyber-primary transition-colors uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              {">"} Tech_Stack
            </a>
            <a
              href="#experiences"
              className="hover:text-cyber-primary transition-colors uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              {">"} Career_Logs
            </a>
          </div>
        </div>

        {/* COLONNE 3 : SOCIAUX & CONTACT */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-black text-cyber-primary tracking-[0.2em] uppercase">
            {t.contact}
          </h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/waytogold17"
              target="_blank"
              className="p-2 border border-cyber-primary/20 hover:bg-cyber-primary/10 transition-all"
              style={{ color: "var(--text)" }}
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/gomezjoseph"
              target="_blank"
              className="p-2 border border-cyber-primary/20 hover:bg-cyber-primary/10 transition-all"
              style={{ color: "var(--text)" }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:gomezjoseph173@gmail.com"
              className="p-2 border border-cyber-primary/20 hover:bg-cyber-primary/10 transition-all"
              style={{ color: "var(--text)" }}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* BASEBAR */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span
          className="text-[9px] opacity-40 uppercase tracking-widest"
          style={{ color: "var(--text)" }}
        >
          © {year} JOSEPH GOMEZ // {t.rights}
        </span>
        <div className="flex gap-6">
          <span
            className="text-[9px] font-mono opacity-30 italic"
            style={{ color: "var(--text)" }}
          >
            Built_with: React_Vite_Tailwind
          </span>
          <span
            className="text-[9px] font-mono opacity-30 italic"
            style={{ color: "var(--text)" }}
          >
            Deployed_on: Vercel_Edge
          </span>
        </div>
      </div>
    </footer>
  );
};
