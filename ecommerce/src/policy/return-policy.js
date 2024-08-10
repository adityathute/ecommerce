// src/policy/disclaimer.js

import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';
import './Policy.css';  // Ensure you have the CSS imported

const ReturnPolicy = () => {
  return (
    <div className="policy">
      <Helmet>
        <title>Return Policy - {config.projectName}</title>
      </Helmet>
      <h1>Return Policy</h1>
      <section>
        <h3>Thank You For Shopping With Us ! We Hope You Love Your Purchase. If You are Not Completely Satisfied We are Here To Help You.</h3>
      </section>
      <section>
        <h2>1. Conditions for Return</h2>
        <p>
        When you use or access our Platform, we may collect your Personal Information. We may collect your personal information in the following manner:
        </p>
        <ul>
          <li>The item must be unused and in the same condition that you received it.</li>
          <li>The item must be in the original packaging.</li>
          <li>You need to have the receipt or proof of purchase.</li>
        </ul>
      </section>
      <section>
        <h2>2. Return Process</h2>
        <ul>
          <li>To initiate a return, please contact our customer service team at support@example.com or call us at (123) 456-7890.</li>
          <li>We will provide you with a return shipping label and instructions on how to send your item back to us.</li>
          <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
        </ul>
      </section>
      <section>
        <h2>3. Refunds</h2>
        <ul>
          <li>If your return is approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment within a certain amount of days.</li>
        </ul>
      </section>
    </div>
  );
}
export default ReturnPolicy;
