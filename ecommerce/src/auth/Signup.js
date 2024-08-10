import { useState } from "react";
import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';
import './Auth.css';
import emailIcon from '../assets/pngs/email.png';
import passwordIcon from '../assets/pngs/password.png';
import nameIcon from '../assets/pngs/person.png';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Handle signup logic here
    };

    return (
        <div className="form-wrapper">
            <Helmet>
                <title> Signup - {config.projectName}</title>
            </Helmet>
            <div className="form-container">
                <h1>Create an account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <img src={nameIcon} alt="Icon" class="nameIcon" />
                        <input
                            type="name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Full name"
                            required
                        />
                    </div>
                    <div className="login-form-group">
                        <img src={emailIcon} alt="Icon" class="emailIcon" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="login-form-group">
                        <img src={passwordIcon} alt="Icon" class="passwordIcon" />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="login-form-group">
                        <img src={passwordIcon} alt="Icon" class="passwordIcon" />
                        <input
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="button btn-green" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;