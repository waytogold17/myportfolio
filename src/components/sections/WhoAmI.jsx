import { motion } from "framer-motion";
import { ShieldCheck, Database, Globe, Cpu } from "lucide-react";

const academicPath = [
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
];

export const WhoAmI = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-8">
        {/* COLONNE GAUCHE: IDENTITÉ RAPIDE (Le Core) */}
        <div className="col-span-12 md:col-span-4 space-y-6">
          <div className="cyber-panel p-6 border-l-4 border-l-cyber-primary">
            <h2 className="text-xs font-mono text-cyber-primary mb-2">
              // IDENTITY_CORE
            </h2>
            <h3 className="text-4xl font-black uppercase italic">
              Joseph Gomez
            </h3>
            <p className="text-gray-400 font-mono text-xs mt-4 leading-relaxed">
              Étudiant expert en Cybersécurité. Polyvalent, orienté réseau &
              développement. Disponible pour opportunités professionnelles.
            </p>
            <div className="mt-6 flex gap-3">
              <ShieldCheck className="text-cyber-primary" size={20} />
              <Globe className="text-gray-600" size={20} />
              <Cpu className="text-gray-600" size={20} />
            </div>
          </div>

          {/* Petit bloc de statut */}
          <div className="cyber-panel p-4 bg-cyber-primary/5 border-dashed">
            <div className="flex justify-between items-center text-[10px] font-mono text-cyber-primary">
              <span>STATUS: OPEN_TO_WORK</span>
              <span className="animate-pulse">●</span>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE: TIMELINE TECHNIQUE (Le Log) */}
        <div className="col-span-12 md:col-span-8 space-y-4">
          <h2 className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-[0.3em]">
            Execution_Path.log
          </h2>

          {academicPath.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 border-l border-white/10 pb-8 last:pb-0"
            >
              {/* Le point sur la timeline */}
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-cyber-primary rounded-full shadow-[0_0_10px_#00ff41]" />

              <div className="cyber-panel p-5 group hover:bg-white/[0.02] transition-colors">
                <span className="text-[10px] font-mono text-cyber-primary opacity-60">
                  {item.date}
                </span>
                <h4 className="text-xl font-bold uppercase mt-1 group-hover:text-cyber-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 font-mono mt-3 leading-relaxed">
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
          ))}
        </div>
      </div>
    </section>
  );
};
