import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Code, ChevronRight } from "lucide-react";

const jobs = [
  {
    company: "Kelii-Consulting",
    role: "Développeur Cybersécurité",
    period: "Sept 2025 - Présent",
    type: "DEV_SEC",
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
    type: "GOV_ISO",
    tasks: [
      "Implémentation directives ISO 27001",
      "Analyses de risques méthode EBIOS",
      "Tableaux de bord KPI Sécurité (Power BI)",
      "Administration LastPass & Sensibilisation",
    ],
    result: "Résolution des non-conformités QHSE et avancement process ISO.",
  },
  {
    company: "Orabank",
    role: "Assistant Support IT",
    period: "Juin 2023 - Août 2023",
    type: "INFRA_L1/L2",
    tasks: [
      "Déploiement supervision réseau & Firewalls Fortigate",
      "Inventaire critique du parc informatique",
      "Routage Inter-VLAN et prévention d'attaques L2",
      "Support technique niveau 1 et 2",
    ],
    result: "Mise en place d'un système de monitoring complet.",
  },
];

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <Terminal className="text-cyber-primary" />
        <h2 className="text-3xl font-black uppercase tracking-tighter">
          Experience_Log
        </h2>
        <div className="h-[1px] flex-1 bg-white/10"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* SÉLECTEUR D'ENTREPRISE */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
          {jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-4 text-left border-l-2 font-mono text-sm transition-all whitespace-nowrap
                ${
                  activeTab === i
                    ? "border-cyber-primary bg-cyber-primary/5 text-white"
                    : "border-white/10 text-gray-500 hover:bg-white/5"
                }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* CONTENU DE LA MISSION */}
        <div className="flex-1 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="cyber-panel p-8"
            >
              <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {jobs[activeTab].role}
                  </h3>
                  <span className="text-cyber-primary font-mono text-xs uppercase">
                    {jobs[activeTab].company}
                  </span>
                </div>
                <span className="text-gray-500 font-mono text-xs">
                  {jobs[activeTab].period}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {jobs[activeTab].tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <ChevronRight
                      size={14}
                      className="mt-1 text-cyber-primary opacity-50 group-hover:opacity-100"
                    />
                    <p className="text-gray-400 text-sm font-mono leading-relaxed">
                      {task}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <Shield size={12} className="text-cyber-primary" />
                  Key_Outcome:{" "}
                  <span className="text-gray-300">
                    {jobs[activeTab].result}
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
