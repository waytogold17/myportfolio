import { motion } from "framer-motion";
import {
  ShieldAlert,
  Terminal,
  Cpu,
  FileSearch,
  Code,
  Database,
  Download,
} from "lucide-react";
import { useApp } from "../../context/AppContext";

// 1. Dictionnaire d'icônes pour garder le contenu propre
const projectIcons = {
  "PRJ-01": <ShieldAlert className="text-red-500" />,
  "PRJ-02": <Terminal className="text-cyber-primary" />,
  "PRJ-03": <Code className="text-blue-400" />,
  "PRJ-04": <FileSearch className="text-yellow-500" />,
  "PRJ-05": <Cpu className="text-purple-500" />,
  "PRJ-06": <Database className="text-green-400" />,
};

const content = {
  FR: {
    subtitle: "// Mes meilleures réalisations",
    title: "Projets_Majeures",
    btn: "TÉLÉCHARGER_L'ARCHIVE_COMPLETE_DES_PROJETS_PDF",
    archive:
      "-- ACCÉDER À L'ARCHIVE COMPLÈTE EN CLIQUANT SUR LE BOUTON CI DESSUS  --",
    projects: [
      {
        id: "PRJ-01",
        category: "OFFSEC",
        title: "Infiltration_AD",
        desc: "Exploitation Active Directory, Zerologon & Escalade de privilèges (Golden Ticket).",
        tech: ["Kali", "Bloodhound", "PowerView"],
      },
      {
        id: "PRJ-02",
        category: "MALWARE",
        title: "Analyse_NjRAT",
        desc: "Analyse statique/dynamique, reverse engineering et rédaction de règles Yara/Sigma.",
        tech: ["IDA Pro", "Volatility", "Sandbox"],
      },
      {
        id: "PRJ-03",
        category: "DEV_SEC",
        title: "AuthPlayground_IAM",
        desc: "Solution de formation aux protocoles OIDC, SAML & SWA via Okta.",
        tech: ["React", "FastAPI", "Okta"],
      },
      {
        id: "PRJ-04",
        category: "FORENSICS",
        title: "Rapport_Forensics",
        desc: "Investigation post-incident : analyse mémoire vive et disque après intrusion.",
        tech: ["Autopsy", "Volatility", "Python"],
      },
      {
        id: "PRJ-05",
        category: "INDUSTRIAL",
        title: "Trieur_Balles_Smart",
        desc: "Système embarqué avec vision réelle, backend Node.js et dashboard temps réel.",
        tech: ["Node.js", "Raspberry Pi", "AJAX"],
      },
      {
        id: "PRJ-06",
        category: "ARCHITECTURE",
        title: "Portfolio_Cyberway",
        desc: "Interface Cyber-Brutaliste optimisée pour l'UX technique et la performance.",
        tech: ["React", "Framer Motion", "Tailwind"],
      },
    ],
  },
  EN: {
    subtitle: "// My Best Achievements",
    title: "Major_Projects",
    btn: "DOWNLOAD_COMPLETE_PROJECTS_PRESENTATION_PDF",
    archive: "-- ACCESS FULL ARCHIVE --",
    projects: [
      {
        id: "PRJ-01",
        category: "OFFSEC",
        title: "AD_Infiltration",
        desc: "Active Directory exploitation, Zerologon & Privilege escalation (Golden Ticket).",
        tech: ["Kali", "Bloodhound", "PowerView"],
      },
      {
        id: "PRJ-02",
        category: "MALWARE",
        title: "NjRAT_Deep_Analysis",
        desc: "Static/dynamic analysis, reverse engineering and Yara/Sigma rules authoring.",
        tech: ["IDA Pro", "Volatility", "Sandbox"],
      },
      {
        id: "PRJ-03",
        category: "DEV_SEC",
        title: "AuthPlayground_IAM",
        desc: "Training solution for OIDC, SAML & SWA protocols via Okta.",
        tech: ["React", "FastAPI", "Okta"],
      },
      {
        id: "PRJ-04",
        category: "FORENSICS",
        title: "Digital_Forensics_Report",
        desc: "Post-incident investigation: RAM and disk analysis after intrusion.",
        tech: ["Autopsy", "Volatility", "Python"],
      },
      {
        id: "PRJ-05",
        category: "INDUSTRIAL",
        title: "Smart_Ball_Sorter",
        desc: "Embedded system with computer vision, Node.js backend and real-time dashboard.",
        tech: ["Node.js", "Raspberry Pi", "AJAX"],
      },
      {
        id: "PRJ-06",
        category: "ARCHITECTURE",
        title: "JG_Cyberway_Portfolio",
        desc: "Cyber-Brutalist interface optimized for technical UX and performance.",
        tech: ["React", "Framer Motion", "Tailwind"],
      },
    ],
  },
};

export const ProjectModule = () => {
  const { lang, isLight } = useApp();
  // On s'assure que 't' est bien mis à jour quand 'lang' change
  const t = content[lang] || content.FR;

  return (
    <section id="projects" className="py-16 px-6 max-w-7xl mx-auto">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 border-b border-white/10 pb-6 gap-6">
        <div>
          <h2 className="text-xs font-mono text-cyber-primary uppercase tracking-[0.3em] mb-2">
            {t.subtitle}
          </h2>
          <div className="section-title" style={{ color: "var(--text)" }}>
            {t.title}
          </div>
        </div>
      </div>

      {/* GRID DES PROJETS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.map((prj) => (
          <motion.div
            key={prj.id}
            whileHover={{ y: -5 }}
            className="cyber-panel p-6 flex flex-col justify-between group h-full"
          >
            <div className="scan-line" />

            <div>
              {/* TOP CARD: Category & Icon */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
                  {prj.category}
                </span>
                {/* On récupère l'icône via l'ID */}
                {projectIcons[prj.id]}
              </div>

              {/* MIDDLE CARD: Title & Desc */}
              <h3
                className="text-2xl font-bold mb-4 group-hover:text-cyber-primary transition-colors uppercase"
                style={{ color: "var(--text)" }}
              >
                {prj.title}
              </h3>
              <p
                className="text-sm font-mono mb-6 leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {prj.desc}
              </p>
            </div>

            {/* BOTTOM CARD: Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {prj.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] bg-white/5 px-2 py-1 border border-white/10 font-mono italic"
                  style={{
                    color: "var(--text-muted)",
                    borderColor: "var(--border)",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ARCHIVE FOOTER */}
      <div className="mt-20 text-center">
        <p
          className="text-xs font-mono uppercase mb-8 tracking-[0.2em]"
          style={{ color: "var(--text-muted)" }}
        >
          {t.archive}
        </p>
      </div>
      <a
        href="/Portfolio-de-Projets-en-Cybersecurite.pdf"
        download="Portfolio-de-Projets-en-Cybersecurite_new.pdf"
        className={`flex items-center justify-center gap-2 px-6 py-3 font-black text-xs transition-all shadow-lg no-underline ${
          isLight
            ? "bg-black text-white hover:bg-cyber-primary hover:shadow-cyber-glow"
            : "bg-white text-black hover:bg-cyber-primary hover:shadow-cyber-glow"
        }`}
      >
        {t.btn} <Download size={14} />
      </a>
    </section>
  );
};
