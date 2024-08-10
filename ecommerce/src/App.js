import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import config from './config';
import Navbar from './components/Navbar';
import Home from './home/Home';
import Contact from './policy/Contact';
import PrivacyPolicy from './policy/privacy-policy';
import TermsOfService from './policy/term-of-service';
import Disclaimer from './policy/disclaimer';
import ReturnPolicy from './policy/return-policy';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Footer from './components/Footer';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
