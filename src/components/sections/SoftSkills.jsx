import { Heart, Zap, Coffee, Brain, ShieldAlert, Terminal } from "lucide-react";

const traits = [
  {
    title: "Intelligence Émotionnelle",
    desc: "Spontanéité couplée à une subtilité contextuelle. Capacité d'intégration rapide.",
    icon: <Zap size={18} />,
  },
  {
    title: "Sang-Froid",
    desc: "Gestion d'incidents et résilience face aux situations critiques ou conflictuelles.",
    icon: <Coffee size={18} />,
  },
  {
    title: "Éthique & Déontologie",
    desc: "Moralité inébranlable face à la tentation. Respect strict de la confidentialité.",
    icon: <ShieldAlert size={18} />,
  },
  {
    title: "Curiosité Culturelle",
    desc: "Inspiré par la culture asiatique et le sport pour une créativité constante.",
    icon: <Brain size={18} />,
  },
];

export const SoftSkills = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <Terminal className="text-cyber-primary" />
        <h2 className="section-title text-3xl font-black uppercase tracking-tighter">
          Soft Skills_Log
        </h2>
        <div className="h-[1px] flex-1 bg-white/10"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {traits.map((trait, i) => (
          <div
            key={i}
            className="cyber-panel p-6 border-t-2 border-t-white/5 hover:border-t-cyber-primary transition-all"
          >
            <div className="text-cyber-primary mb-4">{trait.icon}</div>
            <h4 className="text-sm font-black uppercase mb-2 tracking-tighter">
              {trait.title}
            </h4>
            <p className="text-[11px] text-gray-500 font-mono leading-relaxed">
              {trait.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
