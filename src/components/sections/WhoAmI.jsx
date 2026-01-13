import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Globe, Cpu } from "lucide-react";
import { useApp } from "../../context/AppContext";

const content = {
  FR: {
    id: "// NOYAU_IDENTITÉ",
    name: "A PROPOS DE MOI",
    desc: "Étudiant en cybersécurité et expert dans des domaines ciblés , j'y trouve beaucoup de challenge . Entre CTF, hackatons , et proejts de recherches innovateurs il y a de tout. Je reste ouvert aux discussions , débats aux opportunités mais aussi à vos questions et conseils.",
    status: "STATUT: DISPONIBLE",
    timelineTitle: "Parcours_Académique_log",
    timeline: [
      {
        date: "2023 - PRESENT",
        title: "Bachelor Cybersécurité @ EPITA",
        details:
          "Focus: Sécurité Offensive, Forensics & Protection des données. Semestre International (Belgique) : Systèmes embarqués & Admin Linux.",
        tags: ["DOCKER", "LINUX", "OFFSEC"],
      },
      {
        date: "2021 - 2023",
        title: "Licence Info @ IAI",
        details:
          "Bases solides en dév, modélisation & réseau. Gestion de projet (Agile/Scrum).",
        tags: ["CCNA", "DEV", "AGILE"],
      },
      {
        date: "2021",
        title: "Baccalauréat Scientifique",
        details: "Spécialité Mathématiques & Physique.",
        tags: ["MATH", "LOGIC"],
      },
    ],
  },
  EN: {
    id: "// IDENTITY_CORE",
    name: "ABOUT ME",
    desc: "As a cybersecurity student and expert in specific fields, I find it very challenging. Between CTFs, hackathons, and innovative research projects, there's something for everyone. I'm open to discussions, debates, opportunities, and also your questions and advice.",
    status: "STATUS: OPEN_TO_WORK",
    timelineTitle: "Studies_log",
    timeline: [
      {
        date: "2023 - PRESENT",
        title: "Cybersecurity Bachelor @ EPITA",
        details:
          "Focus: Offensive Security, Forensics & Data Protection. International Semester (Belgium): Embedded Systems & Linux Admin.",
        tags: ["DOCKER", "LINUX", "OFFSEC"],
      },
      {
        date: "2021 - 2023",
        title: "Computer Science Degree @ IAI",
        details:
          "Solid foundations in development, modeling & networking. Project management (Agile/Scrum).",
        tags: ["CCNA", "DEV", "AGILE"],
      },
      {
        date: "2021",
        title: "Scientific Baccalaureate",
        details: "Specialty Mathematics & Physics.",
        tags: ["MATH", "LOGIC"],
      },
    ],
  },
};

export const WhoAmI = () => {
  const { lang, isLight } = useApp(); // ✅ Ajout de isLight
  const t = content[lang] || content.FR;

  return (
    <section id="about" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-8">
        {/* COLONNE GAUCHE: IDENTITÉ */}
        <div className="col-span-12 md:col-span-4 space-y-6">
          <div className="cyber-panel p-6 border-l-4 border-l-cyber-primary">
            <h2 className="text-xs font-mono text-cyber-primary mb-2">
              {t.id}
            </h2>
            <h3
              className="text-4xl font-black uppercase italic"
              style={{ color: "var(--text)" }}
            >
              {t.name}
            </h3>
            <p
              className="font-mono text-xs mt-4 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {t.desc}
            </p>
            <div className="mt-6 flex gap-3">
              <ShieldCheck className="text-cyber-primary" size={20} />
              <Globe
                className={isLight ? "text-gray-400" : "text-gray-600"}
                size={20}
              />
              <Cpu
                className={isLight ? "text-gray-400" : "text-gray-600"}
                size={20}
              />
            </div>
          </div>

          <div className="cyber-panel p-4 bg-cyber-primary/5 border-dashed">
            <div className="flex justify-between items-center text-[10px] font-mono text-cyber-primary">
              <span className="font-bold">{t.status}</span>
              <span className="animate-pulse text-lg">●</span>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE: TIMELINE */}
        <div className="col-span-12 md:col-span-8 space-y-4">
          <h2 className="section-title  mb-10 uppercase tracking-[0.3em]">
            {t.timelineTitle}
          </h2>

          <div className="relative">
            {t.timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                // ✅ Correction de la barre de liaison (border-l) pour le mode Light
                className="relative pl-8 border-l pb-8 last:pb-0"
                style={{
                  borderColor: isLight
                    ? "rgba(0, 138, 32, 0.2)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* ✅ Correction du point (dot) */}
                <div
                  className="absolute left-[-6px] top-0 w-[11px] h-[11px] bg-cyber-primary rounded-full"
                  style={{
                    boxShadow: isLight
                      ? "0 0 8px rgba(0, 138, 32, 0.4)"
                      : "0 0 10px #00ff41",
                  }}
                />

                <div
                  className={`cyber-panel p-5 group transition-colors ${
                    isLight ? "hover:bg-black/[0.02]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="text-[10px] font-mono text-cyber-primary font-bold">
                    {item.date}
                  </span>

                  {/* ✅ Correction du titre (invisibilité réglée) */}
                  <h3
                    className="text-lg font-bold mt-1"
                    style={{ color: "var(--text)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm font-mono mt-3 leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.details}
                  </p>

                  <div className="flex gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] border px-2 py-0.5 font-mono"
                        style={{
                          color: "var(--text-muted)",
                          borderColor: isLight
                            ? "rgba(0,0,0,0.1)"
                            : "rgba(255,255,255,0.1)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
