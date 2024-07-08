import React from "react";
import { ThemeProvider } from "./contexts/themeContext";

const AppThemeProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppThemeProvider;
