import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Lazy route example
const LandingPage = React.lazy(() => import("./pages/LandingPage"))
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"))
const LoginPage = React.lazy(() => import("./pages/LandingPage"))
const StudyMart = React.lazy(() => import("./pages/StudyMart"));
const Arkive = React.lazy(() => import("./pages/Arkive"))
const AskAway = React.lazy(() => import("./pages/AskAway"))

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