import { createContext, useContext, useState, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to manage and provide theme state and actions
export const ThemeProvider = ({ children }) => {
  // Function to determine the initial theme
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

  // Initialize theme state with the initial theme
  const [theme, setTheme] = useState(getInitialTheme());

  // useEffect to run once on the first render
  useEffect(() => {
    // After the first render, check for user's preferences or local storage value
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme);
    // if (typeof window.loadNagishliScript === "function") {
    //   window.loadNagishliScript();
    // }
  }, []);

  // useEffect to apply the theme class to the body element whenever the theme changes
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provide the theme and toggleTheme function to the context consumers
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
