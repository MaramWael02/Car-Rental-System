import React, { useState } from 'react';

const Main = () => {
    /*const [currentForm, setCurrentForm] = useState('login'); // ['login', 'register'
    
    const toggleform = (formName) => {
      setCurrentForm(formName);
    }*/

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
                                            <h1 className="mb-4">Fast and Easy Way To Rent A Car</h1>
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
                                                        <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor className="label">Drop-off location</label>
                                                        <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="form-group mr-2">
                                                            <label htmlFor className="label">Pick-up date</label>
                                                            <input type="text" className="form-control" id="book_pick_date" placeholder="Date" />
                                                        </div>
                                                        <div className="form-group ml-2">
                                                            <label htmlFor className="label">Drop-off date</label>
                                                            <input type="text" className="form-control" id="book_off_date" placeholder="Date" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor className="label">Pick-up time</label>
                                                        <input type="text" className="form-control" id="time_pick" placeholder="Time" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="submit" defaultValue="Rent A Car Now" className="btn btn-secondary py-3 px-4" />
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
                                                    <p><a href="#" className="btn btn-primary py-3 px-4">Reserve Your Perfect Car</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ftco-section ftco-about">
                            <div className="container">
                                <div className="row no-gutters">
                                    <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/about.jpg)' }}>
                                    </div>
                                    <div className="col-md-6 wrap-about ftco-animate">
                                        <div className="heading-section heading-section-white pl-md-5">
                                            <span className="subheading">About us</span>
                                            <h2 className="mb-4">Welcome to Carbook</h2>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                            <p><a href="#" className="btn btn-primary py-3 px-4">Search Vehicle</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="ftco-section ftco-no-pt bg-light">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 heading-section text-center ftco-animate mb-5">
                                        <span className="subheading">What we offer</span>
                                        <h2 className="mb-2">Featured Vehicles</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="carousel-car owl-carousel">
                                            <div className="item">
                                                <div className="car-wrap rounded ftco-animate">
                                                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(images/car-1.jpg)' }}>
                                                    </div>
                                                    <div className="text">
                                                        <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                                                        <div className="d-flex mb-3">
                                                            <span className="cat">Cheverolet</span>
                                                            <p className="price ml-auto">$500 <span>/day</span></p>
                                                        </div>
                                                        <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="car-wrap rounded ftco-animate">
                                                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(images/car-2.jpg)' }}>
                                                    </div>
                                                    <div className="text">
                                                        <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                                                        <div className="d-flex mb-3">
                                                            <span className="cat">Cheverolet</span>
                                                            <p className="price ml-auto">$500 <span>/day</span></p>
                                                        </div>
                                                        <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="car-wrap rounded ftco-animate">
                                                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(images/car-3.jpg)' }}>
                                                    </div>
                                                    <div className="text">
                                                        <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                                                        <div className="d-flex mb-3">
                                                            <span className="cat">Cheverolet</span>
                                                            <p className="price ml-auto">$500 <span>/day</span></p>
                                                        </div>
                                                        <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="car-wrap rounded ftco-animate">
                                                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(images/car-4.jpg)' }}>
                                                    </div>
                                                    <div className="text">
                                                        <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                                                        <div className="d-flex mb-3">
                                                            <span className="cat">Cheverolet</span>
                                                            <p className="price ml-auto">$500 <span>/day</span></p>
                                                        </div>
                                                        <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ftco-section testimony-section bg-light">
                            <div className="container">
                                <div className="row justify-content-center mb-5">
                                    <div className="col-md-7 text-center heading-section ftco-animate">
                                        <span className="subheading">Testimonial</span>
                                        <h2 className="mb-3">Happy Clients</h2>
                                    </div>
                                </div>
                                <div className="row ftco-animate">
                                    <div className="col-md-12">
                                        <div className="carousel-testimony owl-carousel ftco-owl">
                                            <div className="item">
                                                <div className="testimony-wrap rounded text-center py-4 pb-5">
                                                    <div className="user-img mb-2" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                                    </div>
                                                    <div className="text pt-4">
                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Marketing Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimony-wrap rounded text-center py-4 pb-5">
                                                    <div className="user-img mb-2" style={{ backgroundImage: 'url(images/person_2.jpg)' }}>
                                                    </div>
                                                    <div className="text pt-4">
                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Interface Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimony-wrap rounded text-center py-4 pb-5">
                                                    <div className="user-img mb-2" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                                                    </div>
                                                    <div className="text pt-4">
                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">UI Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimony-wrap rounded text-center py-4 pb-5">
                                                    <div className="user-img mb-2" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                                    </div>
                                                    <div className="text pt-4">
                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Web Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimony-wrap rounded text-center py-4 pb-5">
                                                    <div className="user-img mb-2" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                                    </div>
                                                    <div className="text pt-4">
                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">System Analyst</span>
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
                                                <span>Year <br />Experienced</span>
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