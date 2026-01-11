import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(false);
  const [lang, setLang] = useState("FR");

  const toggleTheme = () => setIsLight(!isLight);
  const toggleLang = (l) => setLang(l);

  return (
    <AppContext.Provider value={{ isLight, toggleTheme, lang, toggleLang }}>
      <div className={`${isLight ? "light-mode" : "dark-mode"}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
