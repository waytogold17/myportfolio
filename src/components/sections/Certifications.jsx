import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "CCNA Security",
    issuer: "Cisco",
    level: "ASSOCIATE",
    status: "VERIFIED",
    color: "from-blue-500/20",
  },
  {
    title: "CCNA 3: ENSA",
    issuer: "Cisco",
    level: "ENTERPRISE_NETWORKING",
    status: "VERIFIED",
    color: "from-blue-600/20",
  },
  {
    title: "Ethical Hacking",
    issuer: "Cisco",
    level: "OFFENSIVE",
    status: "VERIFIED",
    color: "from-green-500/20",
  },
  {
    title: "Cybersecurity Threat Mgmt",
    issuer: "Cisco",
    level: "DEFENSIVE",
    status: "VERIFIED",
    color: "from-red-500/20",
  },
  {
    title: "Junior Pentester Path",
    issuer: "TryHackMe",
    level: "PENETRATION_TESTER",
    status: "COMPLETED",
    color: "from-red-600/20",
  },
];

export const Certifications = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <Award className="text-cyber-primary" />
        <h2 className="section-title text-3xl font-black uppercase tracking-tighter">
          Certifications_Log
        </h2>
        <div className="h-[1px] flex-1 bg-white/10 italic text-[10px] text-right text-gray-500 font-mono pl-4">
          DECRYPTING_AUTHORITY... 100%
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, rotateY: 5 }}
            className={`relative p-1 rounded-sm bg-gradient-to-br ${cert.color} to-transparent border border-white/10 group cursor-pointer`}
          >
            <div className="bg-[#0a0a0a] p-6 h-full border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-cyber-primary border border-cyber-primary/30 px-2 py-0.5">
                    {cert.level}
                  </span>
                  <CheckCircle
                    size={14}
                    className="text-cyber-primary animate-pulse"
                  />
                </div>
                <h3 className="text-xl font-black uppercase leading-tight mb-2 group-hover:text-cyber-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-gray-500 tracking-widest">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[9px] font-mono text-gray-600 italic">
                  ID_STATUS: {cert.status}
                </span>
                <ExternalLink
                  size={12}
                  className="text-gray-600 group-hover:text-white transition-colors"
                />
              </div>
            </div>

            {/* Effet de brillance qui traverse la carte au survol */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
