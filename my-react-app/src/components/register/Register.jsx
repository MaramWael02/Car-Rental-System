import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const REGISTER = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [address, setaddress] = useState('');
    const [username, setUsername] = useState('');
    const [carLicense, setCarLicense] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevents the page from refreshing
        
        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, phoneNum, fname, lname, address, username, carLicense }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Successful Registeration', data);
                props.onFormSwitch('login')
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
        <div className="auth-form-container">
            <Form className="register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
                <Form.Group controlId="fname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        value={fname}
                        onChange={(e) => setfName(e.target.value)}
                        type="text"
                        placeholder="Your First Name"
                    />
                </Form.Group>

                <Form.Group controlId="lname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        value={lname}
                        onChange={(e) => setlName(e.target.value)}
                        type="text"
                        placeholder="Your Last Name"
                    />
                </Form.Group>

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="abc123"
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="youremail@gmail.com"
                    />
                </Form.Group>

                <Form.Group controlId="phoneNum">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                        type="tel"
                        placeholder="+(20)01000000000"
                    />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                        type="text"
                        placeholder="city, country"
                    />
                </Form.Group>

                <Form.Group controlId="carLicense">
                    <Form.Label>Driver License</Form.Label>
                    <Form.Control
                        value={carLicense}
                        onChange={(e) => setCarLicense(e.target.value)}
                        type="text"
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="*********"
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Sign up
                </Button>


            <Button className="link-button" onClick={() => props.onFormSwitch('login')}>
                Already have an account? Sign in
            </Button>
                {error && <p className="error-message">{error}</p>}
            </Form>
        </div>
    )
}