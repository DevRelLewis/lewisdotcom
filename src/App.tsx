// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the welcome page */}
        <Route path="/" element={<Welcome />} />
        {/* Route for the main portfolio page */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
