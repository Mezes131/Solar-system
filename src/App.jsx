import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SolarSystem from './components/SolarSystem';
import Demo from './components/Demo';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">Système Solaire 3D</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">Simulation</Link>
              </li>
              <li className="nav-item">
                <Link to="/demo" className="nav-link">Infos</Link>
              </li>
            </ul>
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
