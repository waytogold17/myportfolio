import React from "react";
import { Shield, Network, Cloud } from "lucide-react";
import { useApp } from "../../context/AppContext";

const content = {
  FR: {
    subtitle: "// MA STACK TECHNIQUE",
    title: "Compétences_Techniques",
    categories: [
      {
        id: "cyber",
        icon: Shield,
        title: "Opérations Cyber",
        subskills: [
          { name: "Pentesting", tools: "Kali, Nmap, Metasploit, Burp" },
          {
            name: "Analyse Malware",
            tools: "IDA, Volatility, PeStudio, Ghidra",
          },
          { name: "Forensics", tools: "Autopsy, Wireshark, Procmon" },
          { name: "Reverse Engineering", tools: "GDB, Binary Exploitation" },
        ],
      },
      {
        id: "infra",
        icon: Network,
        title: "Réseau & Infra",
        subskills: [
          {
            name: "Architecture Cisco",
            tools: "Routage, Switching, VLAN, VPN",
          },
          {
            name: "Sécurité Périmétrique",
            tools: "Fortigate, ASA, IDS/IPS, SIEM",
          },
          {
            name: "Admin Système",
            tools: "AD Windows, Linux (Hardening), SSH",
          },
          { name: "Analyse Flux", tools: "Monitoring, Protocoles TCP/IP, DNS" },
        ],
      },
      {
        id: "devops",
        icon: Cloud,
        title: "DevSecOps & Cloud",
        subskills: [
          { name: "Virtualisation", tools: "Proxmox, VMware, KVM" },
          { name: "Conteneurisation", tools: "Docker, Kubernetes, Ansible" },
          { name: "Cloud & IaC", tools: "Azure, AWS, Terraform, IAM" },
          { name: "Développement", tools: "Python, Java, React, FastAPI" },
        ],
      },
    ],
  },
  EN: {
    subtitle: "// MY TECHNICAL STACK",
    title: "Technical_Skills",
    categories: [
      {
        id: "cyber",
        icon: Shield,
        title: "Cybersecurity Ops",
        subskills: [
          { name: "Pentesting", tools: "Kali, Nmap, Metasploit, Burp" },
          {
            name: "Malware Analysis",
            tools: "IDA, Volatility, PeStudio, Ghidra",
          },
          { name: "Forensics", tools: "Autopsy, Wireshark, Procmon" },
          { name: "Reverse Engineering", tools: "GDB, Binary Exploitation" },
        ],
      },
      {
        id: "infra",
        icon: Network,
        title: "Network & Infra",
        subskills: [
          {
            name: "Cisco Architecture",
            tools: "Routing, Switching, VLAN, VPN",
          },
          {
            name: "Perimeter Security",
            tools: "Fortigate, ASA, IDS/IPS, SIEM",
          },
          {
            name: "Systems Admin",
            tools: "Windows AD, Linux (Hardening), SSH",
          },
          {
            name: "Traffic Analysis",
            tools: "Monitoring, TCP/IP Protocols, DNS",
          },
        ],
      },
      {
        id: "devops",
        icon: Cloud,
        title: "DevSecOps & Cloud",
        subskills: [
          { name: "Virtualization", tools: "Proxmox, VMware, KVM" },
          { name: "Containerization", tools: "Docker, Kubernetes, Ansible" },
          { name: "Cloud & IaC", tools: "Azure, AWS, Terraform, IAM" },
          { name: "Development", tools: "Python, Java, React, FastAPI" },
        ],
      },
    ],
  },
};

export const Skills = () => {
  const { lang, isLight } = useApp();
  const t = content[lang] || content.FR;

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header dynamique */}
      <div className="flex flex-col mb-16">
        <h2 className="text-xs font-mono text-cyber-primary tracking-[0.5em] uppercase mb-4">
          {t.subtitle}
        </h2>
        <div
          className="section-title text-4xl font-black uppercase italic"
          style={{ color: "var(--text)" }}
        >
          {t.title}
        </div>
      </div>

      {/* Grille des compétences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.categories.map((cat) => (
          <div
            key={cat.id}
            className="cyber-panel p-8 group transition-all duration-300"
            style={{
              backgroundColor: isLight
                ? "rgba(0,0,0,0.02)"
                : "rgba(255,255,255,0.02)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <cat.icon className="w-8 h-8 text-cyber-primary opacity-80" />
              <h3
                className="text-xl font-bold uppercase tracking-tighter"
                style={{ color: "var(--text)" }}
              >
                {cat.title}
              </h3>
            </div>

            <div className="space-y-6">
              {cat.subskills.map((sub, i) => (
                <div
                  key={i}
                  className="border-l-2 pl-4 transition-colors duration-300"
                  style={{
                    borderColor: isLight
                      ? "rgba(0,0,0,0.1)"
                      : "rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    className="text-sm font-bold uppercase mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    {sub.name}
                  </div>
                  <div
                    className="text-[10px] font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {sub.tools}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Barre d'outils (Footer de section) */}
      <div
        className="mt-16 p-4 border border-dashed flex flex-wrap gap-4 justify-center opacity-60"
        style={{ borderColor: "var(--border)" }}
      >
        {[
          "Python",
          "Fortigate",
          "Docker",
          "Wireshark",
          "Terraform",
          "Linux",
          "React",
          "Azure",
        ].map((tool) => (
          <span
            key={tool}
            className="text-[10px] font-mono border px-3 py-1 italic transition-colors"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
};
