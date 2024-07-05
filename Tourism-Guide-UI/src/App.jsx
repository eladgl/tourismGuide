import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { HomePage } from "./pages/homePage";

import NavBar from "./components/navBar";
import TopNavBar from "./components/topNavBar";
import Footer from "./components/footer";

const App = () => (
  <>
    <div class="flex flex-col min-h-screen bg-gradient-to-br from-blue-800 to-blue-900">
      <Router>
        <TopNavBar />
        <div class="flex flex-row flex-1 w-full bg-gray-100">
          <div>
            <NavBar className="hidden md:block" />
          </div>
          <div className="w-full h-full ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
    <Footer />
  </>
);

export default App;
