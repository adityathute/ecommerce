// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <div className="nav-left">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="nav-logo" />
        </Link>
        {/* <div className="nav-title">Dolat</div> */}
      </div>
       <div className="contact-button">
        <Link to="/contact" className="contact-link">Contact</Link>
      </div>
    </header>
  );
}

export default Navbar;