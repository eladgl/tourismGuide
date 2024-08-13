import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return userPrefersDark ? "dark" : "light";
  };

  // Force light mode on the first load
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    // After the first render, check for user's preferences or local storage value
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    if (typeof window.loadNagishliScript === "function") {
      window.loadNagishliScript();
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
