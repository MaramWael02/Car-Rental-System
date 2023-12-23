import React, { useState } from "react";

export const LOGIN = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from refreshing
        console.log(email);

    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
         <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="*********" id="password" name="password" />
                <button type="submit">Login</button>
         </form>
         <button className="link-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign up</button>
        </div>
    )
}