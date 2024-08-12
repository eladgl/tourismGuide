import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppThemeProvider from "./themeProvider";
import { AuthProvider } from "./contexts/authContext";

import {
  HomePage,
  PageNotFound,
  LoginPage,
  GuidePage,
  ReviewsPage,
  EventsPage,
  GetStartedpage,
} from "./pages";

import TopNavBar from "./components/topNavBar";
import Footer from "./components/footer";

import { AppWrapper, PageWrapper } from "./styles/app";

const App = () => (
  <AppWrapper>
    <AppThemeProvider>
      <AuthProvider>
        <Router>
          <TopNavBar />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/Guidepage" element={<GuidePage />} />
              <Route path="/Eventspage" element={<EventsPage />} />
              <Route path="/Reviewspage" element={<ReviewsPage />} />
              <Route path="/GetStartedpage" element={<GetStartedpage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </PageWrapper>
        </Router>
        <Footer />
      </AuthProvider>
    </AppThemeProvider>
  </AppWrapper>
);

export default App;
