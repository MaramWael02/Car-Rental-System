import React, { useState } from "react";

export const LOGIN = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevents the page from refreshing
        
        /*try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);*/
                props.onFormSwitch('HomePage')
                // Handle successful login (e.g., redirect to dashboard)
           /* } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Hello Server error');
        }*/
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    type="username" 
                    placeholder="username" 
                    id="username" 
                    name="username" 
                    required 
                />
                <label htmlFor="password">Password</label>
                <input 
                    value={password} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="*********" 
                    id="password" 
                    name="password" 
                    required 
                />
                <button type="submit" onClick={handleSubmit}>Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('register')}>
                Don't have an account? Sign up
            </button>
        </div>
    )
}
