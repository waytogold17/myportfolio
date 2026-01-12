import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Activity, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "OP-01",
    title: "Analyse de Malware",
    tags: ["REVERSE", "MALWARE_LAB"],
    description:
      "Analyse statique et dynamique d'un échantillon de ransomware. Extraction de signatures et identification du C2.",
    size: "large",
  },
  {
    id: "OP-02",
    title: "Infiltration de Domaine",
    tags: ["PENTEST", "AD"],
    description:
      "Audit d'un environnement Active Directory : Escalade de privilèges et mouvement latéral.",
    size: "small",
  },
  {
    id: "OP-03",
    title: "Analyse de Logs SIEM",
    tags: ["SOC", "FORENSICS"],
    description:
      "Investigation d'une exfiltration de données via l'analyse de flux Splunk/ELK.",
    size: "small",
  },
];

export const ProjectModule = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header technique style brutaliste */}
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
        <div>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">
            Mission_Logs
          </h2>
          <p className="font-mono text-[10px] text-cyber-primary mt-2">
            ACTIVE_REPOSITORY // TOTAL_NODES: {projects.length}
          </p>
        </div>
        <div className="hidden md:block text-right font-mono text-[10px] opacity-30">
          SECURE_ACCESS_GRANTED <br />
          PORT: 443_SSL
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`cyber-panel group cursor-pointer p-6 flex flex-col justify-between min-h-[300px] 
              ${
                project.size === "large"
                  ? "col-span-12 md:col-span-8"
                  : "col-span-12 md:col-span-4"
              }`}
          >
            {/* Overlay de balayage type radar */}
            <div className="scan-line group-hover:opacity-30 transition-opacity" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono p-1 border border-white/20 text-gray-400 group-hover:border-cyber-primary group-hover:text-cyber-primary transition-colors">
                  {project.id}
                </span>
                <Activity
                  size={14}
                  className="text-white/20 group-hover:text-cyber-primary"
                />
              </div>

              <h3 className="text-3xl font-black uppercase mb-4 leading-none group-hover:translate-x-2 transition-transform">
                {project.title.replace(" ", "_")}
              </h3>

              <div className="flex gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] font-mono bg-white/5 px-2 py-0.5 border border-white/5 italic"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-sm text-gray-500 font-mono line-clamp-2 mb-6 group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-cyber-primary">
                View_Report <ChevronRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
