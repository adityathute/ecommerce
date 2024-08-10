
import { useState } from "react";
import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';
import './Auth.css';
import emailIcon from '../assets/pngs/email.png';
import passwordIcon from '../assets/pngs/password.png';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="form-wrapper">
            <Helmet>
                <title> Login - {config.projectName}</title>
            </Helmet>
            <div className="form-container">
                <h1>Welcome back!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <img src={emailIcon} alt="Icon" class="emailIcon" />
                        <input
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-form-group">
                        <img src={passwordIcon} alt="Icon" class="passwordIcon" />
                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="button btn-blue" type="submit">Login</button>
                </form>
            </div>

        </div>
    );
};

export default LoginForm;
