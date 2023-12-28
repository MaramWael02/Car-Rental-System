import React, { useState } from "react";

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
        
        /*try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, phoneNum, fname, lname, address, username, carLicense }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Successful Registeration', data);*/
                props.onFormSwitch('login')
               /* // Handle successful login (e.g., redirect to dashboard)
            } else {
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
            <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>

            <label htmlFor="fname">First Name</label>
            <input 
                value={fname} 
                onChange={(e) => setfName(e.target.value)} 
                name="fname" id="fname" 
                placeholder="Your First Name" 
            />
            <label htmlFor="lname">Last Name</label>
            <input 
                value={lname} 
                onChange={(e) => setlName(e.target.value)} 
                name="lname" id="lname" 
                placeholder="Your Last Name" 
            />
            <label htmlFor="username">Username</label>
            <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="abc123" 
                id="username" name="username" 
            />

            <label htmlFor="email">Email</label>
                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="Email"
                placeholder="youremail@gmail.com"
                id="email" name="email" 
            />

             <label htmlFor="phoneNum">Phone Number</label>
             <input 
                value={phoneNum} 
                onChange={(e) => setPhoneNum(e.target.value)} 
                type="tel"
                placeholder="+(20)01000000000"
                id="phoneNum" name="phoneNum" 
            />

            <label htmlFor="address">Address</label>
            <input 
                value={address} 
                onChange={(e) => setaddress(e.target.value)} 
                placeholder="city, country"
                id="address" name="address" 
            />
            
            <label htmlFor="carLicense">Driver License</label>
            <input 
                value={carLicense}
                onChange={(e) => setCarLicense(e.target.value)}  
                id="carLicense" name="carLicense" 
            />

            <label htmlFor="password">Password</label>
            <input 
                value={password}
                onChange={(e) => setPass(e.target.value)} 
                type="Password"
                placeholder="*********" 
                id="password" name="password" 
            />

            <button type="submit" onClick={handleSubmit}>Sign up</button>
            {error && <p className="error-message">{error}</p>}
         </form>
         <button className="link-button" onClick={() => props.onFormSwitch('login')}>
            Already have an account? Sign in
         </button>
        </div>
    )
}