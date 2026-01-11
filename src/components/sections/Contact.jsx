import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="border border-cyber-primary/20 p-6 md:p-8 bg-black/40 relative overflow-hidden backdrop-blur-sm">
        {/* Effet visuel de fond */}
        <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-white/10 uppercase italic hidden sm:block">
          Node_Transmission_Protocol_v4
        </div>

        {/* TITRE CORRIGÉ */}
        <div className="flex items-center gap-4 mb-10 overflow-hidden">
          {/* Le point animé est maintenant indépendant du clamp du titre */}
          <div className="w-3 h-3 bg-cyber-primary animate-pulse shadow-[0_0_10px_#00ff41] shrink-0" />

          <h2 className="section-title !m-0 leading-none">
            Establish_Connection
          </h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          <div className="space-y-2">
            <label className="text-[10px] text-cyber-primary uppercase tracking-widest">
              Source_Identity
            </label>
            <input
              type="text"
              placeholder="NAME"
              className="w-full bg-white/5 border border-white/10 p-3 focus:border-cyber-primary outline-none text-sm transition-all focus:bg-white/10"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] text-cyber-primary uppercase tracking-widest">
              Return_Address
            </label>
            <input
              type="email"
              placeholder="EMAIL_ADDRESS"
              className="w-full bg-white/5 border border-white/10 p-3 focus:border-cyber-primary outline-none text-sm transition-all focus:bg-white/10"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] text-cyber-primary uppercase tracking-widest">
              Payload_Data
            </label>
            <textarea
              rows="4"
              placeholder="ENTER_MESSAGE_ENCRYPTION_BUFFER..."
              className="w-full bg-white/5 border border-white/10 p-3 focus:border-cyber-primary outline-none text-sm transition-all focus:bg-white/10"
            ></textarea>
          </div>

          <button className="md:col-span-2 group relative border border-cyber-primary p-4 overflow-hidden transition-all bg-cyber-primary/5 hover:bg-cyber-primary hover:text-black">
            <div className="absolute inset-0 bg-cyber-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center justify-center gap-2 text-xs font-black tracking-[0.3em] uppercase transition-colors">
              Execute_Transmission <Send size={14} />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
