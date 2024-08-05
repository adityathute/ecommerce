// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-content-main">&copy; {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
        <p className="footer-content-links">
          <Link to="/about">About</Link>&nbsp; 
          <Link to="/privacy-policy">Privacy Policy</Link>&nbsp; 
          <Link to="/terms-of-service">Terms of Service</Link>&nbsp; 
          <Link to="/refund-policy">Refund Policy</Link>&nbsp; 
          <Link to="/disclaimer">Disclaimer</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
