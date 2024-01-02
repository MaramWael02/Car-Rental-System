import React, { useState } from 'react';

const Main = (props) => {
const [customer_id, setUsername] = useState(props.username);
const [office_id, setOfficeID] = useState('');
const [pick_up_date, setPickUpdDate] = useState('');
const [return_date, setReturnDate] = useState('');
const [plate_id, setPlateID] = useState('');
const [cars, setCars] = useState([]);
const [error, setError] = useState('');
const handleInput = async (e) =>{
    e.preventDefault();
    try {
            const response = await fetch('http://localhost:8000/api/reserve-car', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ office_id, pick_up_date, return_date, plate_id, customer_id }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                console.log('reservtion successful:', data); 
                // Handle successful login (e.g., redirect to dashboard)
            }
            else {
                const errorData = await response.json();
                alert(errorData.message || 'reservation failed');
            }
        } catch (error) {
            console.error('Error during reservation:', error);
            alert('backend server not connected');
        }
    };
    const handleCarOffice = async (e) => {
        setOfficeID(e.target.value);
        alert('In handleCarOffice' + e.target.value)
        try {
            const url = `http://localhost:8000/api/car-office?office_id=${e.target.value}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setCars(data); 
                console.log('handlePayments successful:', data);
            }
        } catch (error) {
            console.error('Error during handlePayments:', error);
            setError('Server error');
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
                                                        <label htmlFor className="label">Pick-up location</label>
                                                        <select
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Office ID"
                                                            value={office_id}
                                                            onChange={(e) => handleCarOffice(e)}
                                                            required
                                                            style={{ color: 'black' }}
                                                        >
                                                            <option value="">Select an office</option>
                                                            <option value="1">office 1</option>
                                                            <option value="2">office 2</option>
                                                            <option value="3">office 3</option>
                                                            <option value="4">office 4</option>
                                                            <option value="5">office 5</option>
                                                            <option value="6">office 6</option>
                                                        </select>
                                                        
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor className="label">Car</label>
                                                        <select type="text" 
                                                        className="form-control" 
                                                        placeholder="Car's plate ID" 
                                                        value={plate_id}
                                                        onChange={(e) => setPlateID(e.target.value)}
                                                        required
                                                        >
                                                            <option value="">Select a car</option>
                                                            {cars.map((car, index) => (
                                                                <option key={index} value={car.plate_id}>{car.brand} {car.model} {car.plate_id}</option>
                                                            
                                                            ))}
                                                        </select>
                                        
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
                                                            required
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
                                                            required
                                                            />
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <button className='reservation-button' type="submit" onClick={handleInput}>Rent A Car Now</button>
                                                        {error && <p className="error-message">{error}</p>}
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
                        {/*<section className="ftco-counter ftco-section img bg-light" id="section-counter">
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
                        </section>*/}
                    </div>

                </div>

            </>

        </div>
    );
}

export default Main;