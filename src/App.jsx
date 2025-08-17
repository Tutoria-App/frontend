import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Lazy route example
const LandingPage = React.lazy(() => import("./pages/LandingPage"))
const RegisterPage = React.lazy(() => import("./pages/Auth/RegisterPage"))
const LoginPage = React.lazy(() => import("./pages/Auth/LoginPage"))
const StudyMart = React.lazy(() => import("./pages/StudyMart/StudyMart"));
const Arkive = React.lazy(() => import("./pages/Arkive/Arkive"))
const AskAway = React.lazy(() => import("./pages/AskAway/AskAway"))
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"))

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
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