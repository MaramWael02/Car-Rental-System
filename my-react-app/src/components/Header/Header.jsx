import React, { useState } from 'react';

function Header() {
    /*const [currentForm, setCurrentForm] = useState('login'); // ['login', 'register'
    
    const toggleform = (formName) => {
      setCurrentForm(formName);
    }*/

    return (
        <div className="App">
            <>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">LuxeDriver<span>Rentals</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu" /> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                                <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
                                <li className="nav-item"><a href="pricing.html" className="nav-link">Pricing</a></li>
                                <li className="nav-item"><a href="car.html" className="nav-link">Cars</a></li>
                                <li className="nav-item"><a href="contact.html" className="nav-link">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </>

        </div>
    );
}

export default Header;