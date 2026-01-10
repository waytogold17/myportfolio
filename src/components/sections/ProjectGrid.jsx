import { motion } from "framer-motion";
import { Terminal, Shield, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Analyse de Malware",
    category: "CYBER_SEC",
    status: "ENCRYPTED",
    desc: "Extraction de signatures et analyse de comportement en sandbox.",
  },
  {
    title: "Pentest Infrastructure",
    category: "NETWORK",
    status: "COMPLETED",
    desc: "Audit de sécurité complet d'un réseau d'entreprise simulé.",
  },
  {
    title: "JG_Cyberway V2",
    category: "DEV",
    status: "PRODUCTION",
    desc: "Refonte du portfolio expert avec React et Framer Motion.",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2 }}
    className="relative group overflow-hidden border border-white/10 bg-black/40 p-6 hover:border-cyber-primary/50 transition-colors"
  >
    {/* Coin décoratif type HUD */}
    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/5 group-hover:border-cyber-primary transition-colors" />

    <div className="flex items-center gap-2 mb-4">
      <Terminal size={16} className="text-cyber-primary" />
      <span className="text-[10px] font-mono text-gray-500 tracking-tighter uppercase">
        {project.category} // {project.status}
      </span>
    </div>

    <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-primary transition-colors italic">
      {project.title.toUpperCase()}
    </h3>
    <p className="text-sm text-gray-400 mb-6 font-mono leading-relaxed">
      {project.desc}
    </p>

    <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyber-primary hover:gap-4 transition-all">
      View Decrypted Data <ExternalLink size={12} />
    </button>
  </motion.div>
);

export const ProjectGrid = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-black uppercase hover-glitch">
          Projets_Sélectifs
        </h2>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};
