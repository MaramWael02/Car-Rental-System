import React, { useState, useEffect } from "react";
export const CarList = (props) => {
  const [cars, setCars] = useState([]);
  const handleNavigation = (page) => {
    props.onClick(page, props.username);
  }
  useEffect(() => {
    fetch('http://localhost:8000/api/view-cars') // Your backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Cars data:', data);
        setCars(data); // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once after initial render


  return (
    <div className="App">
      <>
        <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: 'url("images/bg_3.jpg")' }} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
              <div className="col-md-9 ftco-animate pb-5">
                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Cars <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread">Choose Your Car</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row">
              {cars.map((car, index) => (
                <div key={index} className="col-md-4">
                  <div className="car-wrap rounded ftco-animate">
                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: `url(${"images/"}${car.image})`, zIndex: 1 }}>
                    </div>
                    <div className="text">
                      <h2 className="mb-0"><a href="#">{car.brand} {car.model}</a></h2>
                      <div className="d-flex mb-3">
                        <span className="cars-labels">Office ID:{car.office_id}</span>
                        <span className="plate-labels">Plate ID:{car.plate_id}</span>
                        <p className="price ml-auto">${car.price}<span>/day</span></p>
                      </div>
                      <p className="d-flex mb-0 d-block">
                        <a href="#" className="btn btn-primary py-2 mr-1 bookNowBTN" onClick={() => handleNavigation('HomePage')}>Book now</a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}

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
                  <h2 className="mb-4">Welcome to Luxe Driver Rentals</h2>
                  <p>Drive Your Dreams: Unleash Luxury on Every Journey with LuxeDriver Rentals</p>
                  <p>At Luxe Driver Rentals, we understand that every journey is an opportunity to create lasting memories, and the vehicle you choose plays a pivotal role in shaping those moments. That's why we've curated a fleet of the most coveted luxury cars, ensuring that each drive with us is a statement of refined taste and opulence.

Our commitment to excellence goes beyond the vehicles we offer. We have meticulously designed our rental process to be seamless, from the moment you browse our collection to the instant you step into your chosen vehicle. Our user-friendly online platform allows you to explore our fleet, select your dream car, and secure your reservation with ease.

.</p>
                  <p><a href="#" className="btn btn-primary py-3 px-4">Search Vehicle</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </>
    </div>
  );
}

