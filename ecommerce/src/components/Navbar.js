// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../Global.css';

function Navbar() {
  return (
    <header>
      <div className="nav-left">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="nav-logo" />
        </Link>
        {/* <div className="nav-title">Dolat</div> */}
      </div>

      <div className="nav-center">

      </div>

      <div className="nav-right">
        <div className="">
          <Link to="/Login" className="button btn-blue">Login</Link>
        </div>
        <div className="">
          <Link to="/Signup" className="button btn-green">Signup</Link>
        </div>
      </div>



    </header>
  );
}

export default Navbar;
