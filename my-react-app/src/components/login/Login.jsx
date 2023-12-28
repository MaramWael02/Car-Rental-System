import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export const LOGIN = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
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
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Hello Server error');
        }
    }

    return (
        <Form.Group className="auth-form-container">
            <Form className="register-form" onSubmit={handleSubmit}>
            <h2 className="Login">Login</h2>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        type="text" 
                        placeholder="username" 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label style={{ color: '' }}>Password</Form.Label>
                    <Form.Control 
                        value={password} 
                        onChange={(e) => setPass(e.target.value)} 
                        type="password" 
                        placeholder="*********" 
                        required 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Login
                </Button>
                {error && <Alert variant="danger">{error}</Alert>}
            <Button className="link-button" onClick={() => props.onFormSwitch('register')}>
                Don't have an account? Sign up
            </Button>
            </Form>
        </Form.Group>
    )
}
