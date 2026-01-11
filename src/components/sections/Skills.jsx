import React, { useState } from "react";
import { Shield, Network, Terminal, Cloud, Cpu, Lock } from "lucide-react";

const skillCategories = [
  {
    id: "cyber",
    title: "Cybersecurity Ops",
    icon: <Shield className="text-cyber-primary" />,
    subskills: [
      { name: "Pentesting", tools: "Kali, Nmap, Metasploit, Burp" },
      { name: "Analyse Malware", tools: "IDA, Volatility, PeStudio, Ghidra" },
      { name: "Forensics", tools: "Autopsy, Wireshark, Procmon" },
      { name: "Reverse Engineering", tools: "GDB, Binary Exploitation" },
    ],
  },
  {
    id: "infra",
    title: "Network & Infra",
    icon: <Network className="text-cyber-primary" />,
    subskills: [
      { name: "Architecture Cisco", tools: "Routage, Switching, VLAN, VPN" },
      { name: "Sécurité Périmétrique", tools: "Fortigate, ASA, IDS/IPS, SIEM" },
      { name: "Admin Système", tools: "AD Windows, Linux (Hardening), SSH" },
      { name: "Analyse Flux", tools: "Monitoring, Protocoles TCP/IP, DNS" },
    ],
  },
  {
    id: "devops",
    title: "DevSecOps & Cloud",
    icon: <Cloud className="text-cyber-primary" />,
    subskills: [
      { name: "Virtualisation", tools: "Proxmox, VMware, KVM" },
      { name: "Conteneurisation", tools: "Docker, Kubernetes, Ansible" },
      { name: "Cloud & IaC", tools: "Azure, AWS, Terraform, IAM" },
      { name: "Développement", tools: "Python, Java, React, FastAPI" },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col mb-16">
        <h2 className="text-xs font-mono text-cyber-primary tracking-[0.5em] uppercase mb-4">
          // MA STACK TECHNIQUE
        </h2>
        <div className="section-title text-4xl font-black uppercase italic">
          Compétences_Techniques
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat) => (
          <div
            key={cat.id}
            className="cyber-panel p-8 group hover:bg-cyber-primary/[0.02] transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              {cat.icon}
              <h3 className="text-xl font-bold uppercase tracking-tighter">
                {cat.title}
              </h3>
            </div>

            <div className="space-y-6">
              {cat.subskills.map((sub, i) => (
                <div
                  key={i}
                  className="border-l border-white/10 pl-4 hover:border-cyber-primary transition-colors"
                >
                  <div className="text-sm font-bold text-white uppercase mb-1">
                    {sub.name}
                  </div>
                  <div className="text-[10px] font-mono text-gray-500">
                    {sub.tools}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Barre d'outils rapide (Marquee ou liste simple) */}
      <div className="mt-16 p-4 border border-dashed border-white/10 flex flex-wrap gap-4 justify-center opacity-50">
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
            className="text-[10px] font-mono border border-white/20 px-3 py-1 italic"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
};
