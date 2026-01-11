import { Sun, Moon } from "lucide-react";
import { useApp } from "../context/AppContext";

export const SettingsSwitch = () => {
  const { isLight, toggleTheme, lang, toggleLang } = useApp();

  return (
    <div
      className="flex items-center gap-4 backdrop-blur-md p-2 border transition-all duration-500 rounded-full"
      style={{
        // Fond et bordure s'adaptent dynamiquement
        backgroundColor: isLight
          ? "rgba(255, 255, 255, 0.6)"
          : "rgba(0, 0, 0, 0.3)",
        borderColor: isLight
          ? "rgba(0, 0, 0, 0.1)"
          : "rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Theme Switch */}
      <button
        onClick={toggleTheme}
        className="transition-transform duration-300 hover:scale-110 active:scale-90"
        style={{ color: "var(--text)" }}
        title={isLight ? "Dark Mode" : "Light Mode"}
      >
        {isLight ? (
          <Moon size={16} className="hover:text-blue-500 transition-colors" />
        ) : (
          <Sun size={16} className="hover:text-yellow-400 transition-colors" />
        )}
      </button>

      {/* Séparateur adaptatif */}
      <div
        className="w-[1px] h-4"
        style={{
          backgroundColor: isLight
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(255, 255, 255, 0.1)",
        }}
      />

      {/* Lang Switch */}
      <div className="flex gap-2 text-[10px] font-black font-mono">
        <button
          onClick={() => toggleLang("FR")}
          className={`transition-colors ${
            lang === "FR" ? "text-cyber-primary" : ""
          }`}
          style={{ color: lang !== "FR" ? "var(--text-muted)" : "" }}
        >
          FR
        </button>
        <button
          onClick={() => toggleLang("EN")}
          className={`transition-colors ${
            lang === "EN" ? "text-cyber-primary" : ""
          }`}
          style={{ color: lang !== "EN" ? "var(--text-muted)" : "" }}
        >
          EN
        </button>
      </div>
    </div>
  );
};
