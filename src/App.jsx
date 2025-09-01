import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SolarSystem from './components/SolarSystem';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className="main-content">
                  <Routes>
          <Route path="/" element={<SolarSystem />} />
          <Route path="/Solar-system" element={<SolarSystem />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);
}

export default App;
