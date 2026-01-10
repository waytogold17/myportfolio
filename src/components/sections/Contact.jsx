import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="border border-cyber-primary/20 p-8 bg-cyber-darker relative overflow-hidden">
        {/* Effet visuel de fond */}
        <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-white/10 uppercase italic">
          Node_Transmission_Protocol_v4
        </div>

        <h2 className="text-2xl font-black mb-8 uppercase tracking-widest flex items-center gap-4">
          <span className="w-2 h-2 bg-cyber-primary animate-ping" />
          Establish_Connection
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          <div className="space-y-2">
            <label className="text-[10px] text-cyber-primary uppercase">
              Source_Identity
            </label>
            <input
              type="text"
              placeholder="NAME"
              className="w-full bg-white/5 border border-white/10 p-3 focus:border-cyber-primary outline-none text-sm transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] text-cyber-primary uppercase">
              Return_Address
            </label>
            <input
              type="email"
              placeholder="EMAIL_ADDRESS"
              className="w-full bg-white/5 border border-white/10 p-3 focus:border-cyber-primary outline-none text-sm transition-all"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] text-cyber-primary uppercase">
              Payload_Data
            </label>
            <textarea
              rows="4"
              placeholder="ENTER_MESSAGE_ENCRYPTION_BUFFER..."
              className="w-full bg-white/5 border border-white/10 p-3 focus:border-cyber-primary outline-none text-sm transition-all"
            ></textarea>
          </div>

          <button className="md:col-span-2 group relative border border-cyber-primary p-4 overflow-hidden transition-all">
            <div className="absolute inset-0 bg-cyber-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            <span className="relative flex items-center justify-center gap-2 text-xs font-black tracking-[0.3em] uppercase">
              Execute_Transmission <Send size={14} />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
