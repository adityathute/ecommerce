// src/home/Home.js

import React from 'react';
import { EnvelopeIcon } from '../assets/SVGs';
import config from '../config';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>Welcome to {config.projectName}</h1>
        <p>E-commerce is the activity of electronically buying or selling products on online services or over the Internet.</p>
        <div className="main_envolope">
        <div className="fullscreen cc">
          <a href="/contact" className="cta-button">
            <EnvelopeIcon />
            <span className="cta-text">Contact Us</span>
          </a>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Home;
