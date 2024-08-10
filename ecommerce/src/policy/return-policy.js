// src/policy/disclaimer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import config from '../config';
//import { toLowerCase } from '../components/utils';
import './Policy.css';  // Ensure you have the CSS imported

const ReturnPolicy= () => {
  //const projectNameLower = toLowerCase(config.projectName);

  return (
    <div className="policyr">
      <Helmet>
                <title>ReturnPolicy - {config.projectName}</title>
            </Helmet>
        <u><h1>Return Policy</h1></u>
        
        
        <strong><font color = "black" size="4">Thank You For Shopping With Us ! We Hope You Love Your Purchase. If You are Not Completely Satisfied We are Here To Help You.
        </font>
        </strong>
        <div className="policy-conditions">
                <section>
                    <h2>1. Conditions for Return</h2>
                    <ul>
        <strong><li>The item must be unused and in the same condition that you received it.</li>
        <li>The item must be in the original packaging.</li>
        <li>You need to have the receipt or proof of purchase.</li>
        </strong>
      </ul>
                </section>
                <section>
                   
                    <h2>2. Return Process</h2>
      <ul>
        <strong><li>To initiate a return, please contact our customer service team at support@example.com or call us at (123) 456-7890.</li>
        <li>We will provide you with a return shipping label and instructions on how to send your item back to us.</li>
        <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
        </strong>
      </ul>
                </section>
                <section>
                    
                    <h2>3. Refunds</h2>
                    <ul>
      <li><strong><p>If your return is approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment within a certain amount of days.</p>
      </strong>
      </li>
      </ul>
      <hr className="bold-hr" />
                </section>
        
                
                <div className="nav-left">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="nav-logo" />
        </Link>
        {/* <div className="nav-title">Dolat</div> */}
      </div>
                
       </div>
         </div>
         

  );
}
export default ReturnPolicy;
