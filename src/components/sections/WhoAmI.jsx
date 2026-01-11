import { motion } from "framer-motion";
import { ShieldCheck, Database, Globe, Cpu } from "lucide-react";
import { useApp } from "../../context/AppContext";

const content = {
  FR: {
    id: "// NOYAU_IDENTITÉ",
    name: "Joseph Gomez",
    desc: "Étudiant expert en Cybersécurité. Polyvalent, orienté réseau & développement.",
    status: "STATUT: DISPONIBLE",
    timelineTitle: "Execution_Path.log",
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
    name: "Joseph Gomez",
    desc: "Cybersecurity student expert. Versatile, network & development oriented.",
    status: "STATUS: OPEN_TO_WORK",
    timelineTitle: "Execution_Path.log",
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
  const { lang } = useApp(); // ✅ UTILISÉ
  const t = content[lang];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-8">
        {/* COLONNE GAUCHE: IDENTITÉ DYNAMIQUE */}
        <div className="col-span-12 md:col-span-4 space-y-6">
          <div className="cyber-panel p-6 border-l-4 border-l-cyber-primary">
            <h2 className="text-xs font-mono text-cyber-primary mb-2">
              {t.id} {/* ✅ DYNAMIQUE */}
            </h2>
            <h3
              className="text-4xl font-black uppercase italic"
              style={{ color: "var(--text)" }}
            >
              {t.name}
            </h3>
            <p
              className="font-mono text-xs mt-4 leading-relaxed"
              style={{ color: "var(--text-muted)" }} // ✅ var(--text-muted)
            >
              {t.desc} {/* ✅ DYNAMIQUE */}
            </p>
            <div className="mt-6 flex gap-3">
              <ShieldCheck className="text-cyber-primary" size={20} />
              <Globe className="text-gray-600" size={20} />
              <Cpu className="text-gray-600" size={20} />
            </div>
          </div>

          {/* Statut DYNAMIQUE */}
          <div className="cyber-panel p-4 bg-cyber-primary/5 border-dashed">
            <div className="flex justify-between items-center text-[10px] font-mono text-cyber-primary">
              <span>{t.status}</span> {/* ✅ DYNAMIQUE */}
              <span className="animate-pulse">●</span>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE: TIMELINE DYNAMIQUE */}
        <div className="col-span-12 md:col-span-8 space-y-4">
          <h2
            className="text-xs font-mono mb-6 uppercase tracking-[0.3em]"
            style={{ color: "var(--text-muted)" }} // ✅ var(--text-muted)
          >
            {t.timelineTitle} {/* ✅ DYNAMIQUE */}
          </h2>

          {t.timeline.map(
            (
              item,
              i // ✅ DYNAMIQUE t.timeline
            ) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10 pb-8 last:pb-0"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-cyber-primary rounded-full shadow-[0_0_10px_#00ff41]" />
                <div className="cyber-panel p-5 group hover:bg-white/[0.02] transition-colors">
                  <span className="text-[10px] font-mono text-cyber-primary opacity-60">
                    {item.date}
                  </span>
                  <h4 className="text-xl font-bold uppercase mt-1 group-hover:text-cyber-primary transition-colors">
                    {item.title}
                  </h4>
                  <p
                    className="text-sm font-mono mt-3 leading-relaxed"
                    style={{ color: "var(--text-muted)" }} // ✅ var(--text-muted)
                  >
                    {item.details}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] border border-white/10 px-2 py-0.5 text-gray-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
