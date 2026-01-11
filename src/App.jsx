// src/App.jsx
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

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState("", document.title, window.location.pathname);
    }
  }, []);
  return (
    <MainLayout>
      <CyberBackground />
      <CyberAudio />

      {/* Navigation optimisée : padding réduit sur mobile */}
      <nav className="fixed top-0 w-full z-50 p-4 md:p-6 flex justify-between items-center font-mono border-b border-white/5 bg-black/80 backdrop-blur-md">
        <img
          src={myLogo}
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
          alt="Logo"
        />

        {/* Liens : On en cache certains sur mobile (hidden md:flex) pour ne pas saturer l'écran */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em]">
          <a
            href="#projects"
            className="hover:text-cyber-primary transition-all"
          >
            Projects
          </a>
          <a
            href="#experiences"
            className="hidden sm:block hover:text-cyber-primary transition-all"
          >
            Experiences
          </a>
          <a
            href="#whyme"
            className="hidden sm:block hover:text-cyber-primary transition-all"
          >
            Pourquoi moi?
          </a>
          <a
            href="#about"
            className="hidden sm:block hover:text-cyber-primary transition-all"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-cyber-primary transition-all"
          >
            Contact
          </a>

          <div className="hidden lg:block text-right text-[9px] text-gray-500 ml-4 border-l border-white/10 pl-4 leading-tight">
            [ AUTH_USER: GOMEZ_J ]<br />[ STATUS: ENCRYPTED ]
          </div>
        </div>
        <MobileMenu />
      </nav>

      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        {/* Les marges auto et max-width sont gérées dans les composants */}
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
