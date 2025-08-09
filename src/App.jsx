import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudyMart from './pages/Studymart';
import Arkive from './pages/Arkive';
import AskAway from './pages/Askaway';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/askaway" element={<AskAway />} />
        <Route path="/arkive" element={<Arkive />} />
        <Route path="/studymart" element={<StudyMart />} />
      </Routes>
    </Router>
  );
};

export default App;