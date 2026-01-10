import MainLayout from "./components/layout/MainLayout";
import TerminalBoot from "./components/ui/TerminalBoot";
import { ProjectGrid } from "./components/sections/ProjectGrid";
import { WhoAmI } from "./components/sections/WhoAmI";
import { CyberAudio } from "./components/ui/CyberAudio";
import { Contact } from "./components/sections/Contact";
import CyberBackground from "./components/ui/CyberBackground";
import { Experience } from "./components/ui/Experience";
import { Manifesto } from "./components/sections/Manifesto";
import { SoftSkills } from "./components/sections/SoftSkills";
import { Skills } from "./components/sections/Skills";

function App() {
  return (
    <MainLayout>
      {/* HEADER HUD */}
      <nav className="p-6 flex justify-between items-center font-mono border-b border-white/5">
        <div className="text-cyber-primary text-xs tracking-tighter">
          [ AUTH_USER: GUEST_01 ]<br />[ IP: 127.0.0.1 ]
        </div>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em]">
          <a
            href="#projects"
            className="hover:text-cyber-primary transition-all underline-offset-8 hover:underline"
          >
            Projects
          </a>
          <a href="#about" className="hover:text-cyber-primary transition-all">
            WhoAmI
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="min-h-screen flex flex-col pt-32 px-10">
        <CyberBackground />
        <div className="mb-8">
          <TerminalBoot
            text="Initializing Joyboy onboarding protocol..."
            delay={0.03}
          />
        </div>

        <h1 className="text-7xl md:text-9xl font-black uppercase leading-none mb-4">
          EXPERT <br />
          <span
            className="text-transparent stroke-white"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
          >
            CYBER
          </span>
        </h1>

        <div className="max-w-xl mt-10 border-l-2 border-cyber-primary pl-6">
          <p className="text-gray-400 font-mono text-sm leading-relaxed">
            Je me nomme Joseph GOMEZ . Je suis passionné par la cybersécurité ,
            la compelxité et la technologie , j'aime les challenges .J'ai de
            plus de l'appétence pour divers domaines notamment la sécurité
            réseau , l'analyse malware , le développement et sa sécurisation.
          </p>
        </div>
        <Skills />
        {/* PROJECT GRID COMPONENT */}
        <div className="mt-32">
          <ProjectGrid />
          <Experience />
          <WhoAmI />
          <SoftSkills />
          <Manifesto />
          <Contact />
        </div>
        <CyberAudio />
      </main>
    </MainLayout>
  );
}

export default App;
