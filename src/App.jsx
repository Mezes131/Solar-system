import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SolarSystem from './components/SolarSystem';
import Demo from './components/Demo';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import './css/App.css';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">{t('home.title')}</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">{t('navigation.home')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/demo" className="nav-link">{t('navigation.demo')}</Link>
              </li>
            </ul>
            <LanguageSelector />
          </div>
        </nav>

        <main className="main-content">
                  <Routes>
          <Route path="/" element={<SolarSystem />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);
}

export default App;
