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

import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  background: var(--background);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

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
