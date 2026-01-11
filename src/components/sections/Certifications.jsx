import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { useApp } from "../../context/AppContext";

// 1. Données brutes des certifications
const certData = [
  {
    title: "CCNA Security",
    issuer: "Cisco",
    level: { FR: "ASSOCIÉ", EN: "ASSOCIATE" },
    status: { FR: "VÉRIFIÉ", EN: "VERIFIED" },
    color: "from-blue-500/20",
  },
  {
    title: "CCNA 3: ENSA",
    issuer: "Cisco",
    level: { FR: "RÉSEAU ENTREPRISE", EN: "ENTERPRISE NETWORKING" },
    status: { FR: "VÉRIFIÉ", EN: "VERIFIED" },
    color: "from-blue-600/20",
  },
  {
    title: "Ethical Hacking",
    issuer: "Cisco",
    level: { FR: "OFFENSIF", EN: "OFFENSIVE" },
    status: { FR: "VÉRIFIÉ", EN: "VERIFIED" },
    color: "from-green-500/20",
  },
  {
    title: "Cybersecurity Threat Mgmt",
    issuer: "Cisco",
    level: { FR: "DÉFENSIF", EN: "DEFENSIVE" },
    status: { FR: "VÉRIFIÉ", EN: "VERIFIED" },
    color: "from-red-500/20",
  },
  {
    title: "Junior Pentester Path",
    issuer: "TryHackMe",
    level: { FR: "PENTESTER", EN: "PENETRATION TESTER" },
    status: { FR: "TERMINÉ", EN: "COMPLETED" },
    color: "from-red-600/20",
  },
];

const content = {
  FR: { title: "Logs_Certifications", status: "DÉCRYPTAGE_AUTORITÉ... 100%" },
  EN: { title: "Certifications_Log", status: "DECRYPTING_AUTHORITY... 100%" },
};

export const Certifications = () => {
  const { lang, isLight } = useApp();
  const t = content[lang] || content.FR;

  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header avec ligne adaptative */}
      <div className="flex items-center gap-4 mb-16">
        <Award className="text-cyber-primary" />
        <h2
          className="section-title text-3xl font-black uppercase"
          style={{ color: "var(--text)" }}
        >
          {t.title}
        </h2>
        <div
          className="h-[1px] flex-1 opacity-20"
          style={{ backgroundColor: "var(--text)" }}
        ></div>
        <span
          className="font-mono text-[10px] opacity-50"
          style={{ color: "var(--text)" }}
        >
          {t.status}
        </span>
      </div>

      {/* Grid des Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certData.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, rotateY: 5 }}
            className={`relative p-1 rounded-sm bg-gradient-to-br ${cert.color} to-transparent border border-white/10 group cursor-pointer`}
          >
            {/* Remplacement de bg-[#0a0a0a] par var(--panel) pour le mode Light */}
            <div
              className="p-6 h-full border border-white/5 flex flex-col justify-between"
              style={{ backgroundColor: "var(--panel)" }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-cyber-primary border border-cyber-primary/30 px-2 py-0.5">
                    {cert.level[lang]}
                  </span>
                  <CheckCircle
                    size={14}
                    className="text-cyber-primary animate-pulse"
                  />
                </div>
                <h3
                  className="text-xl font-black uppercase leading-tight mb-2 group-hover:text-cyber-primary transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-xs font-mono tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cert.issuer}
                </p>
              </div>

              <div
                className="mt-8 pt-4 border-t flex justify-between items-center"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="text-[9px] font-mono italic opacity-60"
                  style={{ color: "var(--text)" }}
                >
                  ID_STATUS: {cert.status[lang]}
                </span>
                <ExternalLink
                  size={12}
                  style={{ color: "var(--text-muted)" }}
                  className="group-hover:text-cyber-primary transition-colors"
                />
              </div>
            </div>

            {/* Effet de brillance (glow) adaptatif */}
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent ${
                isLight ? "via-black/5" : "via-white/5"
              } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
