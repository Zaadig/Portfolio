import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProfessionalPage from './ProfessionalPage';
import MusicPage from './MusicPage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/professional" element={<ProfessionalPage />} />
      <Route path="/music" element={<MusicPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
