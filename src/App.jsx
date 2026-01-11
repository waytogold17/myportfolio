import MainLayout from "./components/layout/MainLayout";
import CyberBackground from "./components/ui/CyberBackground";
import { CyberAudio } from "./components/ui/CyberAudio";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { ProjectModule } from "./components/sections/ProjectGrid";
import { Certifications } from "./components/sections/Certifications";
import { Experience } from "./components/ui/Experience";
import { WhoAmI } from "./components/sections/WhoAmI";
import { SoftSkills } from "./components/sections/SoftSkills";
import { Manifesto } from "./components/sections/Manifesto";
import { Contact } from "./components/sections/Contact";
import myLogo from "./assets/mylogocyber2.png";
import { useEffect } from "react";
import { MobileMenu } from "./components/ui/MobileMenu";
import { useApp } from "./context/AppContext";

const navContent = {
  FR: {
    projects: "Projets",
    exp: "Expériences",
    about: "À propos",
    contact: "Contact",
    status: "CRYPTÉ",
  },
  EN: {
    projects: "Projects",
    exp: "Experiences",
    about: "About",
    contact: "Contact",
    status: "ENCRYPTED",
  },
};

function App() {
  const { isLight, toggleTheme, lang, toggleLang } = useApp();
  const t = navContent[lang] || navContent.FR;

  useEffect(() => {
    window.scrollTo(0, 0);
    // Nettoyage de l'URL pour éviter les hash persistants au refresh
    if (window.location.hash) {
      window.history.replaceState("", document.title, window.location.pathname);
    }
  }, []);

  return (
    <MainLayout>
      <CyberBackground />
      <CyberAudio />

      {/* NAVBAR ADAPTATIVE */}
      <nav
        className="fixed top-0 w-full z-50 p-4 md:p-6 flex justify-between items-center font-mono border-b backdrop-blur-md transition-all duration-500"
        style={{
          backgroundColor: isLight
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(0, 0, 0, 0.8)",
          borderColor: "var(--border)",
        }}
      >
        {/* GROUPE GAUCHE : Logo & Codename */}
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src={myLogo}
            className={`w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 ${
              isLight
                ? "drop-shadow-lg" // ✅ Ombre portée NOIRE en light
                : "brightness-110 saturate-110" // ✅ Légèrement boosté en dark
            }`}
            alt="Logo"
          />

          <h2
            className="text-[9px] md:text-xs font-mono text-cyber-primary uppercase tracking-[0.2em] italic border-l pl-3 md:pl-4"
            style={{ borderLeftColor: "var(--border)" }}
          >
            <span className="opacity-50">//</span> CODENAME:{" "}
            <span className="font-black" style={{ color: "var(--text)" }}>
              JOYBOY
            </span>
          </h2>
        </div>

        {/* GROUPE DROITE : Nav & Switches */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-[11px] uppercase tracking-[0.2em] items-center">
          <nav className="flex gap-6 lg:gap-8" style={{ color: "var(--text)" }}>
            <a
              href="#projects"
              className="hover:text-cyber-primary transition-all"
            >
              {t.projects}
            </a>
            <a
              href="#experiences"
              className="hidden lg:block hover:text-cyber-primary transition-all"
            >
              {t.exp}
            </a>
            <a
              href="#about"
              className="hidden sm:block hover:text-cyber-primary transition-all"
            >
              {t.about}
            </a>
            <a
              href="#contact"
              className="hover:text-cyber-primary transition-all"
            >
              {t.contact}
            </a>
          </nav>

          {/* CONTROL CENTER : Theme & Lang */}
          <div
            className="flex items-center gap-3 border px-3 py-1 rounded-full transition-colors"
            style={{
              backgroundColor: isLight
                ? "rgba(0,0,0,0.05)"
                : "rgba(255,255,255,0.05)",
              borderColor: "var(--border)",
            }}
          >
            <button
              onClick={toggleTheme}
              className="text-cyber-primary text-[10px] uppercase font-black hover:opacity-70 transition-opacity"
            >
              {isLight ? "[ DARK_UI ]" : "[ LIGHT_UI ]"}
            </button>
            <div
              className="w-[1px] h-3"
              style={{ backgroundColor: "var(--border)" }}
            />
            <button
              onClick={() => toggleLang(lang === "FR" ? "EN" : "FR")}
              className="text-[10px] font-mono hover:text-cyber-primary transition-colors"
              style={{ color: "var(--text)" }}
            >
              {lang === "FR" ? "EN" : "FR"}
            </button>
          </div>

          {/* USER TAG */}
          <div
            className="hidden xl:block text-right text-[9px] ml-4 border-l pl-4 leading-tight"
            style={{
              color: "var(--text-muted)",
              borderLeftColor: "var(--border)",
            }}
          >
            [ AUTH_USER: GOMEZ_J ]<br />[ STATUS: {t.status} ]
          </div>
        </div>

        {/* Menu Mobile pour les petits écrans */}
        <MobileMenu />
      </nav>

      {/* CONTENU PRINCIPAL */}
      <main className="relative z-10 w-full overflow-x-hidden pt-20">
        <Hero />
        <Skills />
        <ProjectModule />
        <Certifications />
        <Experience />
        <WhoAmI />
        <SoftSkills />
        <Manifesto />
        <Contact />
      </main>
    </MainLayout>
  );
}

export default App;
