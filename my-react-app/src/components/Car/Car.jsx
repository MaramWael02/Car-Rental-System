import React, {useState, useEffect} from "react";

export const CarList = (props) => {
    const [cars, setCars] = useState([]);
        useEffect(() => {
            fetchData();
          }, []); // Empty dependency array means this effect runs only once after initial render
        
          const fetchData = async () => {
            try {
              // Fetch data from an API
              const response = await fetch('http://localhost:8000/api/view-cars');
              const result = await response.json();
              setCars(result);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
    return (
    
        <div>
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
              <div className="img rounded d-flex align-items-end" style={{backgroundImage: `url(${car.image})`}}>
              </div>
              <div className="text">
                <h2 className="mb-0"><a href="#">{car.name}</a></h2>
                <div className="d-flex mb-3">
                  <span className="cat">{car.brand}</span>
                  <p className="price ml-auto">${car.price} <span>/day</span></p>
                </div>
                <p className="d-flex mb-0 d-block">
                  <a href="#" className="btn btn-primary py-2 mr-1">Book now</a> 
                  <a href="#" className="btn btn-secondary py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>
        ))}
 
                </div>
            </div>
        </section>
    </div>


);
}
    
  