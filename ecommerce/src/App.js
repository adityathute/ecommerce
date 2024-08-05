import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import config from './config';
import Navbar from './components/Navbar';
import Home from './home/Home';
import Contact from './contact/Contact';
import PrivacyPolicy from './policy/privacy-policy';
import TermsOfService from './policy/term-of-service';
import Disclaimer from './policy/disclaimer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>{config.projectName}</title>
        </Helmet>
        <Navbar /> {/* Add Navbar here */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
