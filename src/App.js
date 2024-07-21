// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import CoursesPage from './components/CoursesPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
