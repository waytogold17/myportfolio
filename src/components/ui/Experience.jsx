import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, ChevronRight } from "lucide-react";
import { useApp } from "../../context/AppContext";

const content = {
  FR: {
    sectionTitle: "Expériences_Log",
    outcomeLabel: "Résultat_Clé:",
    jobs: [
      {
        company: "Kelii-Consulting",
        role: "Développeur Cybersécurité",
        period: "Sept 2025 - Présent",
        tasks: [
          "Hardening & Gestion de vulnérabilités (Fullstack)",
          "Automatisation SAST/DAST & CI/CD Security",
          "Implémentation IAM (Okta, SAML, OIDC)",
          "Pentest de solutions internes",
        ],
        result: "Wrapper API complet développé pour le hardening système.",
      },
      {
        company: "Fracht",
        role: "Assistant SSI & QHSE",
        period: "Juil 2025 - Sept 2025",
        tasks: [
          "Implémentation directives ISO 27001",
          "Analyses de risques méthode EBIOS",
          "Tableaux de bord KPI Sécurité (Power BI)",
          "Administration LastPass & Sensibilisation",
        ],
        result:
          "Résolution des non-conformités QHSE et avancement process ISO.",
      },
      {
        company: "Orabank",
        role: "Assistant Support IT",
        period: "Juin 2023 - Août 2023",
        tasks: [
          "Déploiement supervision réseau & Firewalls Fortigate",
          "Inventaire critique du parc informatique",
          "Routage Inter-VLAN et prévention d'attaques L2",
          "Support technique niveau 1 et 2",
        ],
        result: "Mise en place d'un système de monitoring complet.",
      },
    ],
  },
  EN: {
    sectionTitle: "Experience_Log",
    outcomeLabel: "Key_Outcome:",
    jobs: [
      {
        company: "Kelii-Consulting",
        role: "Cybersecurity Developer",
        period: "Sept 2025 - Present",
        tasks: [
          "Fullstack Hardening & Vulnerability Management",
          "SAST/DAST automation & CI/CD Security",
          "IAM Implementation (Okta, SAML, OIDC)",
          "Pentesting of internal solutions",
        ],
        result: "Complete API Wrapper developed for system hardening.",
      },
      {
        company: "Fracht",
        role: "SSI & QHSE Assistant",
        period: "July 2025 - Sept 2025",
        tasks: [
          "Implementation of ISO 27001 guidelines",
          "Risk analysis using EBIOS method",
          "Security KPI Dashboards (Power BI)",
          "LastPass Administration & Awareness training",
        ],
        result:
          "Resolution of QHSE non-conformities and ISO process advancement.",
      },
      {
        company: "Orabank",
        role: "IT Support Assistant",
        period: "June 2023 - Aug 2023",
        tasks: [
          "Network monitoring & Fortigate Firewall deployment",
          "Critical IT asset inventory",
          "Inter-VLAN routing & L2 attack prevention",
          "Level 1 and 2 technical support",
        ],
        result: "Implementation of a comprehensive monitoring system.",
      },
    ],
  },
};

export const Experience = () => {
  const { lang, isLight } = useApp();
  const t = content[lang] || content.FR;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experiences" className="py-24 px-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-12">
        <Terminal className="text-cyber-primary" />
        <h2
          className="section-title text-3xl font-black uppercase tracking-tighter"
          style={{ color: "var(--text)" }}
        >
          {t.sectionTitle}
        </h2>
        <div
          className="h-[1px] flex-1"
          style={{ backgroundColor: "var(--border)" }}
        ></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* SÉLECTEUR D'ENTREPRISE */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-hide">
          {t.jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-4 text-left border-l-2 font-mono text-sm transition-all whitespace-nowrap
                ${
                  activeTab === i
                    ? "border-cyber-primary bg-cyber-primary/5 text-cyber-primary font-bold"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              style={{
                color:
                  activeTab === i
                    ? "var(--cyber-primary)"
                    : "var(--text-muted)",
                backgroundColor:
                  activeTab === i ? "rgba(0, 255, 65, 0.05)" : "transparent",
              }}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* CONTENU DE LA MISSION */}
        <div className="flex-1 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${lang}`} // Clé combinée pour relancer l'anim au changement de langue
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="cyber-panel p-8"
            >
              <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    {t.jobs[activeTab].role}
                  </h3>
                  <span className="text-cyber-primary font-mono text-xs uppercase font-bold">
                    {t.jobs[activeTab].company}
                  </span>
                </div>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.jobs[activeTab].period}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {t.jobs[activeTab].tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <ChevronRight
                      size={14}
                      className="mt-1 text-cyber-primary opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                    <p
                      className="text-sm font-mono leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {task}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="pt-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Shield size={12} className="text-cyber-primary" />
                  {t.outcomeLabel}{" "}
                  <span style={{ color: "var(--text)" }}>
                    {t.jobs[activeTab].result}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
