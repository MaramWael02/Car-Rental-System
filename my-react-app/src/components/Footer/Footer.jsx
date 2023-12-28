import React, { useState } from 'react';

const Footer=() => {
    /*const [currentForm, setCurrentForm] = useState('login'); // ['login', 'register'
    
    const toggleform = (formName) => {
      setCurrentForm(formName);
    }*/

    return (
        <div className="App">
            <>
                <footer className="ftco-footer ftco-bg-dark ftco-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2"><a href="#" className="logo">LuxeDriver<span>Rentals</span></a></h2>
                                    <p>Drive Your Dreams: Unleash Luxury on Every Journey with LuxeDriver Rentals</p>
                                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4 ml-md-5">
                                    <h2 className="ftco-heading-2">Information</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="py-2 d-block">About</a></li>
                                        <li><a href="#" className="py-2 d-block">Services</a></li>
                                        <li><a href="#" className="py-2 d-block">Term and Conditions</a></li>
                                        <li><a href="#" className="py-2 d-block">Best Price Guarantee</a></li>
                                        <li><a href="#" className="py-2 d-block">Privacy &amp; Cookies Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Customer Support</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="py-2 d-block">Payment Option</a></li>
                                        <li><a href="#" className="py-2 d-block">Booking Tips</a></li>
                                        <li><a href="#" className="py-2 d-block">How it works</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                                    <div className="block-23 mb-3">
                                        <ul>
                                            <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | LuxeDrive Rentals
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                            </div>
                        </div>
                    </div>
                </footer>

            </>


        </div>
    );
}

export default Footer;