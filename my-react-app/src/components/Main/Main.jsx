import React, { useState } from 'react';

const Main = () => {
const [customer_id, setUsername] = useState('');
const [office_id, setOfficeID] = useState('');
const [pick_up_date, setPickUpdDate] = useState('');
const [return_date, setReturnDate] = useState('');
const [plate_id, setPlateID] = useState('');
const [error, setError] = useState('');

const handleInput = async (e) =>{
    e.preventDefault();
    try {
            const response = await fetch('http://localhost:8000/api/reserve', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ office_id, pick_up_date, return_date, plate_id, customer_id }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('reservtion successful:', data); 
                // Handle successful login (e.g., redirect to dashboard)
            }
            else {
                const errorData = await response.json();
                setError(errorData.message || 'reservation failed');
            }
        } catch (error) {
            console.error('Error during reservation:', error);
            setError('Hello Server error');
        }
    };



    return (
        <div className="App">
            <>
                <div>
                    <div>
                        <div className="hero-wrap ftco-degree-bg" style={{ backgroundImage: 'url("images/bg_1.jpg")' }} data-stellar-background-ratio="0.5">
                            <div className="overlay" />
                            <div className="container">
                                <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
                                    <div className="col-lg-8 ftco-animate">
                                        <div className="text w-100 text-center mb-md-5 pb-md-5">
                                            <h1 htmlFor='true' className="mb-4">Fast and Easy Way To Rent A Car</h1>
                                            <p style={{ fontSize: 18 }}>Unleash Your Dreams</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="ftco-section ftco-no-pt bg-light">
                            <div className="container">
                                <div className="row no-gutters">
                                    <div className="col-md-12	featured-top">
                                        <div className="row no-gutters">
                                            <div className="col-md-4 d-flex align-items-center">
                                                <form action="#" className="request-form ftco-animate bg-primary">
                                                    <h2>Make your trip</h2>
                                                    <div className="form-group">
                                                        <label htmlFor className="label">Username</label>
                                                        <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Enter your username" 
                                                        value={customer_id}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor className="label">Pick-up location</label>
                                                        <input type="text" 
                                                        className="form-control" 
                                                        placeholder="Office ID" 
                                                        value={office_id}
                                                        onChange={(e) => setOfficeID(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor className="label">Car</label>
                                                        <input type="text" 
                                                        className="form-control" 
                                                        placeholder="Car's plate ID" 
                                                        value={plate_id}
                                                        onChange={(e) => setPlateID(e.target.value)}
                                                        />
                                                    </div>
                            
                                                    <div className="d-flex">
                                                        <div className="form-group mr-2">
                                                            <label htmlFor className="label">Pick-up date</label>
                                                            <input type="date" 
                                                            className="form-control" 
                                                            id="book_pick_date" 
                                                            placeholder="Date" 
                                                            value={pick_up_date}
                                                            onChange={(e) => setPickUpdDate(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group ml-2">
                                                            <label htmlFor className="label">Drop-off date</label>
                                                            <input type="date" 
                                                            className="form-control" 
                                                            id="book_off_date" 
                                                            placeholder="Date" 
                                                            value={return_date}
                                                            onChange={(e) => setReturnDate(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <input type="submit" onClick={handleInput} className="btn btn-secondary py-3 px-4" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-8 d-flex align-items-center">
                                                <div className="services-wrap rounded-right w-100">
                                                    <h3 className="heading-section mb-4">The Perfect Way to Rent Your Perfect Cars</h3>
                                                    <div className="row d-flex mb-4">
                                                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                                            <div className="services w-100 text-center">
                                                                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route" /></div>
                                                                <div className="text w-100">
                                                                    <h3 className="heading mb-2">Choose Your Pickup Location</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                                            <div className="services w-100 text-center">
                                                                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-handshake" /></div>
                                                                <div className="text w-100">
                                                                    <h3 className="heading mb-2">Select the Best Deal</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                                            <div className="services w-100 text-center">
                                                                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-rent" /></div>
                                                                <div className="text w-100">
                                                                    <h3 className="heading mb-2">Reserve Your Rental Car</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ftco-counter ftco-section img bg-light" id="section-counter">
                            <div className="overlay" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18">
                                            <div className="text text-border d-flex align-items-center">
                                                <strong className="number" data-number={60}>0</strong>
                                                <span>Total <br />Reservations</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18">
                                            <div className="text text-border d-flex align-items-center">
                                                <strong className="number" data-number={1090}>0</strong>
                                                <span>Total <br />Cars</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18">
                                            <div className="text text-border d-flex align-items-center">
                                                <strong className="number" data-number={2590}>0</strong>
                                                <span>Happy <br />Customers</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18">
                                            <div className="text d-flex align-items-center">
                                                <strong className="number" data-number={67}>0</strong>
                                                <span>Total <br />Branches</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>

            </>

        </div>
    );
}

export default Main;