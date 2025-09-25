import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import ModulesPage from './pages/ModulesPage/ModulesPage';
import PlayerPage from './pages/PlayerPage/PlayerPage';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cursos" element={<CoursesPage />} />
  <Route path="/modulos" element={<ModulesPage />} />
  <Route path="/tutorial/:id" element={<ModulesPage />} />
        <Route path="/player" element={<PlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;

