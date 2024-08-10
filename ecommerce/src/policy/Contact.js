// src/contact/emailConfig.js

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';
import emailjs from 'emailjs-com';
import './Contact.css';
import emailConfig from './emailConfig';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(true); // Track if email was sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); // Always show the thank you message

    if (!emailConfig.isServiceEnabled) {
      // Email service is disabled, do not attempt to send email
      setEmailSent(false);
      return;
    }

    try {
      // Attempt to send email
      const result = await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        {
          ...formData,
          to_name: 'Dolat Software', // Replace with the name of the recipient
          reply_to: formData.email,
        },
        emailConfig.publicKey
      );

      if (result.status === 200) {
        console.log('Form submitted:', formData);
        setEmailSent(true);
      } else {
        console.error('Form submission error:', result.text);
        setEmailSent(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setEmailSent(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <Helmet>
        <title>Contact Us - {config.projectName}</title>
      </Helmet>
      <div className="contact-container">
        {submitted && (
          <p className="contact-show-header">
            {emailSent
              ? 'Thank you for reaching out! We will get back to you soon.'
              : 'The email service is currently disabled. Your message was not sent.'}
          </p>
        )}
        {!submitted && (
          <form onSubmit={handleSubmit}>
            <h1 className="contact-header">Contact Us</h1>
            <h3 className="contact-sub-header">Tell us a little about yourself, and we’ll be in touch right away.</h3>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder='Name'
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder='Email'
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder='Help me understand how I can help you?'
                onChange={handleChange}
                required
              />
            </div>
            <button className="send-button" type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
