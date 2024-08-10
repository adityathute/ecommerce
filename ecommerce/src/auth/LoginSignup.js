import { useState } from "react";
import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';
//import { toLowerCase } from '../components/utils';
import './LoginSignup.css';  // Ensure you have the CSS
//import email_icon from './asset/email.png';
//import password_icon from './asset/password.png';
//import person_icon from './asset/person.png';




const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="form-container">
            <Helmet>
                <title> loginSignup {config.projectName}</title>
            </Helmet>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
