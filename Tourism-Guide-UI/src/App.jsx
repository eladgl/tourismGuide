import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AppThemeProvider from "./themeProvider";

import { HomePage, PageNotFound } from "./pages";

//import NavBar from "./components/navBar";
import TopNavBar from "./components/topNavBar";
import Footer from "./components/footer";

import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  background: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <AppWrapper>
    <AppThemeProvider>
      {/* <div className="flex flex-col min-h-screen  App-background"> */}
      <Router>
        <TopNavBar />
        <div className="w-full h-full justify-center items-center flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
      {/* </div> */}
      <Footer />
    </AppThemeProvider>
  </AppWrapper>
);

export default App;
