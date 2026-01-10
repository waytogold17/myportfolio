/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          // Noir profond pour le fond
          black: "#050505",
          darker: "#0a0a0a",
          // Vert Matrix (tu peux le changer en #00d4ff pour du bleu)
          primary: "#00ff41",
          // Rouge alerte pour les erreurs ou les accents "Dark Side"
          secondary: "#ff003c",
          // Couleur des bordures et grilles
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        // Police pour le code et les détails techniques
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        // Police pour les titres massifs
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        // Animation de clignotement pour le curseur du terminal
        "pulse-fast": "pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
