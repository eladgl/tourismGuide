import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AppThemeProvider from "./themeProvider";

import { HomePage, PageNotFound } from "./pages";

//import NavBar from "./components/navBar";
import TopNavBar from "./components/topNavBar";
import Footer from "./components/footer";

const App = () => (
  <AppThemeProvider>
    <div className="flex flex-col min-h-screen bg-gradient-to-br App-background">
      <Router>
        <TopNavBar />

        <div className="w-full h-full ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
    <Footer />
  </AppThemeProvider>
);

export default App;
