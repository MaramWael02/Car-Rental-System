import React, { useState } from "react";

export const LOGIN = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');

    const [selectedOption, setSelectedOption] = useState('Customer');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleCustomerlogin = async (e) => {
        e.preventDefault(); // prevents the page from refreshing
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data); 
                props.onFormSwitch('HomePage')
                // Handle successful login (e.g., redirect to dashboard)
            }
            else {
                const errorData = await response.json();
                alert(errorData.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Hello Server error');
        }
    };
    const handleAdminlogin = async (e) => {
        e.preventDefault(); // prevents the page from refreshing
        try {
            const response = await fetch('http://localhost:8000/api/adminlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Admin Login successful:', data); 
                props.onFormSwitch('AdminHomePage')
           }
            else {
                const errorData = await response.json();
                alert(errorData.message || 'Login failed');
            }
        }
        catch (error) {
            console.error('Error during login:', error);
            setError('Hello Server error');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevents the page from refreshing
        if (selectedOption === 'Customer') {
            handleCustomerlogin(e);
        }
        else if (selectedOption === 'Admin') {
            handleAdminlogin(e);
        }
    }

    return (
        <div className="auth-form-container">
            <img  alt="background of a car" src="../images/bg_1.jpg" className="background_image" />
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="LoginLabel">Login</h2>
                <label htmlFor="username">Username</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
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
                <div className="radio-container">
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="Customer"
                            checked={selectedOption === 'Customer'}
                            onChange={handleOptionChange}
                        />
                        Customer
                    </label>

                    <label className="radio-label">
                        <input
                            type="radio"
                            value="Admin"
                            checked={selectedOption === 'Admin'}
                            onChange={handleOptionChange}
                        />
                        Admin
                    </label>
                </div>

                <button type="submit" onClick={handleSubmit}>Login</button>
                {error && <p className="error-message">{error}</p>}
                <button className="link-button" onClick={() => props.onFormSwitch('register')}>
                    Don't have an account? Sign up
                </button>
            </form>
        </div>
    )
}
