import React from "react";
import { ThemeProvider } from "./contexts/themeContext";

/**
 * AppThemeProvider component
 *
 * This component wraps the entire application (or a portion of it) with the ThemeProvider context,
 * enabling access to theme-related data and functions throughout the component tree.
 *
 * @param {object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child components that will have access to the theme context.
 */
const AppThemeProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppThemeProvider;
