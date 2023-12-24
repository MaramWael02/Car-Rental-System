import React, { useState } from "react";

export const REGISTER = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from refreshing
        console.log(email);

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
             <label htmlFor="name">Full name</label>
             <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Your Name" />
             <label htmlFor="email">Email</label>
             <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="youremail@gmail.com" id="email" name="email" />
             <label htmlFor="password">Password</label>
             <input value={password} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="*********" id="password" name="password" />
             <button type="submit">Sign up</button>
         </form>
         <button className="link-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in</button>
        </div>
    )
}