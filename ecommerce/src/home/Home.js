// src/home/Home.js

import React from 'react';
import ContactUsButton from '../components/contactButton';
import config from '../config';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>Welcome to {config.projectName}</h1>
        <p>E-commerce is the activity of electronically buying or selling products on online services or over the Internet.</p>
        <ContactUsButton />
      </section>
    </div>
  );
}

export default Home;
