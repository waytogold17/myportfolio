import { motion } from "framer-motion";
import {
  ShieldAlert,
  Terminal,
  Network,
  Cpu,
  FileSearch,
  Code,
  Database,
  Download,
} from "lucide-react";

const featuredProjects = [
  {
    id: "PRJ-01",
    category: "OFFSEC",
    title: "AD_Infiltration",
    desc: "Exploitation Active Directory, Zerologon & Escalade de privilèges (Golden Ticket).",
    tech: ["Kali", "Bloodhound", "PowerView"],
    icon: <ShieldAlert className="text-red-500" />,
  },
  {
    id: "PRJ-02",
    category: "MALWARE",
    title: "NjRAT_Deep_Analysis",
    desc: "Analyse statique/dynamique, reverse engineering et rédaction de règles Yara/Sigma.",
    tech: ["IDA Pro", "Volatility", "Sandbox"],
    icon: <Terminal className="text-cyber-primary" />,
  },
  {
    id: "PRJ-03",
    category: "DEV_SEC",
    title: "AuthPlayground_IAM",
    desc: "Solution de formation aux protocoles OIDC, SAML & SWA via Okta.",
    tech: ["React", "FastAPI", "Okta"],
    icon: <Code className="text-blue-400" />,
  },
  {
    id: "PRJ-04",
    category: "FORENSICS",
    title: "Digital_Forensics_Report",
    desc: "Investigation post-incident : analyse mémoire vive et disque après intrusion.",
    tech: ["Autopsy", "Volatility", "Python"],
    icon: <FileSearch className="text-yellow-500" />,
  },
  {
    id: "PRJ-05",
    category: "INDUSTRIAL",
    title: "Smart_Ball_Sorter",
    desc: "Système embarqué avec vision réelle, backend Node.js et dashboard temps réel.",
    tech: ["Node.js", "Raspberry Pi", "AJAX"],
    icon: <Cpu className="text-purple-500" />,
  },
  {
    id: "PRJ-06",
    category: "ARCHITECTURE",
    title: "JG_Cyberway_Portfolio",
    desc: "Interface Cyber-Brutaliste optimisée pour l'UX technique et la performance.",
    tech: ["React", "Framer Motion", "Tailwind"],
    icon: <Database className="text-green-400" />,
  },
];

export const ProjectModule = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 border-b border-white/10 pb-6 gap-6">
        <div>
          <h2 className="text-xs font-mono text-cyber-primary uppercase tracking-[0.3em] mb-2">
            // PROJECT_DEPOSITS
          </h2>
          <div className="section-title">Opérations_Majeures</div>
        </div>

        <button className="flex items-center justify-center gap-2 bg-white text-black px-4 py-3 md:py-2 font-black text-xs hover:bg-cyber-primary transition-colors w-full md:w-auto">
          DOWNLOAD_FULL_LOGS_PDF <Download size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((prj) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={prj.id}
            className="cyber-panel p-6 flex flex-col justify-between group"
          >
            <div className="scan-line" />
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-gray-500 tracking-widest">
                  {prj.category}
                </span>
                {prj.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyber-primary transition-colors">
                {prj.title}
              </h3>
              <p className="text-sm text-gray-400 font-mono mb-6 leading-relaxed">
                {prj.desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {prj.tech.map((t) => (
                <span
                  key={t}
                  className="text-[9px] bg-white/5 px-2 py-1 border border-white/10 font-mono italic"
                >
                  #{t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Archive Section */}
      <div className="mt-20 text-center">
        <p className="text-xs font-mono text-gray-500 uppercase mb-8 tracking-[0.2em]">
          -- ACCÉDER À L'ARCHIVE COMPLÈTE (PROJETS 7 À 12) --
        </p>
        <div className="flex flex-wrap justify-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
          {["PKI_Nginx", "Docker_GLPI", "SSH_Auto_Scripts", "Synapse_Chat"].map(
            (oldPrj) => (
              <span
                key={oldPrj}
                className="text-[10px] font-mono border-b border-white/20 px-2 cursor-help"
              >
                {oldPrj}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};
