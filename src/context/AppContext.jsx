import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const [lang, setLang] = useState("FR");
  const [isMuted, setIsMuted] = useState(true);

  const toggleTheme = () => setIsLight(!isLight);
  const toggleLang = (l) => setLang(l);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <AppContext.Provider
      value={{ isLight, toggleTheme, lang, toggleLang, isMuted, toggleMute }}
    >
      <div className={`${isLight ? "light-mode" : "dark-mode"}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
