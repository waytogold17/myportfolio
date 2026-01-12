import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useApp } from "../../context/AppContext";

const content = {
  FR: {
    title: "Établir_Connexion",
    nameLabel: "Identité_Source",
    namePlace: "NOM_OU_PSEUDO",
    emailLabel: "Adresse_Retour",
    emailPlace: "VOTRE_EMAIL",
    msgLabel: "Données_Payload",
    msgPlace: "ENTRER_MESSAGE_BUFFER...",
    btn: "Exécuter_Transmission",
    success: "PAQUET_TRANSMIS_AVEC_SUCCÈS",
    error: "ERREUR_DE_PROTOCOLE_D'ENVOI",
  },
  EN: {
    title: "Establish_Connection",
    nameLabel: "Source_Identity",
    namePlace: "NAME_OR_HANDLE",
    emailLabel: "Return_Address",
    emailPlace: "EMAIL_ADDRESS",
    msgLabel: "Payload_Data",
    msgPlace: "ENTER_MESSAGE_BUFFER...",
    btn: "Execute_Transmission",
    success: "PACKET_TRANSMITTED_SUCCESSFULLY",
    error: "TRANSMISSION_PROTOCOL_ERROR",
  },
};

export const Contact = () => {
  const { lang, isLight } = useApp();
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const t = content[lang] || content.FR;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const now = new Date();
    const timestamp = now.toLocaleString(lang === "FR" ? "fr-FR" : "en-US", {
      dateStyle: "short",
      timeStyle: "medium",
    });

    const templateParams = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      message: formRef.current.message.value,
      send_time: timestamp, // Voici ta variable horaire
    };

    // REMPLACE CES 3 VALEURS PAR LES TIENNES
    emailjs
      .send(
        "service_vew5s87",
        "template_lebje9s",
        templateParams,
        "4iO1bv8J6SkpQbz66"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error(error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  const inputStyle = {
    color: "var(--text)",
    borderColor: "var(--border)",
    backgroundColor: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.05)",
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <div
        className="border border-cyber-primary/20 p-6 md:p-8 relative overflow-hidden backdrop-blur-sm"
        style={{
          backgroundColor: isLight
            ? "rgba(255,255,255,0.8)"
            : "rgba(10,10,10,0.4)",
        }}
      >
        <h2 className="section-title !m-0" style={{ color: "var(--text)" }}>
          {t.title}
        </h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 font-mono"
        >
          {/* Nom - Note: le 'name' doit correspondre à ton template EmailJS */}
          <div className="space-y-2">
            <label className="text-[10px] text-cyber-primary uppercase tracking-[0.2em] font-bold">
              {t.nameLabel}
            </label>
            <input
              name="user_name"
              required
              type="text"
              placeholder={t.namePlace}
              style={inputStyle}
              className="w-full border p-3 focus:border-cyber-primary outline-none text-sm transition-all bg-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] text-cyber-primary uppercase tracking-[0.2em] font-bold">
              {t.emailLabel}
            </label>
            <input
              name="user_email"
              required
              type="email"
              placeholder={t.emailPlace}
              style={inputStyle}
              className="w-full border p-3 focus:border-cyber-primary outline-none text-sm transition-all bg-transparent"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] text-cyber-primary uppercase tracking-[0.2em] font-bold">
              {t.msgLabel}
            </label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder={t.msgPlace}
              style={inputStyle}
              className="w-full border p-3 focus:border-cyber-primary outline-none text-sm transition-all resize-none bg-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="md:col-span-2 group relative border border-cyber-primary p-4 overflow-hidden transition-all disabled:opacity-50"
            style={{ color: isLight ? "var(--text)" : "white" }}
          >
            <div
              className={`absolute inset-0 bg-cyber-primary transition-transform duration-300 ${
                status === "idle"
                  ? "translate-y-full group-hover:translate-y-0"
                  : "translate-y-0"
              }`}
            />

            <span className="relative flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.3em] group-hover:text-black transition-colors">
              {status === "idle" && (
                <>
                  {t.btn} <Send size={14} />
                </>
              )}
              {status === "sending" && (
                <>
                  <Loader2 size={16} className="animate-spin text-black" />{" "}
                  TRANSMISSION...
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 size={16} className="text-black" /> {t.success}
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle size={16} className="text-red-600" /> {t.error}
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
