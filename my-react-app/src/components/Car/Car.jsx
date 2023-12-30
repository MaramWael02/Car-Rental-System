import React, {useState, useEffect} from "react";
export const CarList = () => {
    const [cars, setCars] = useState([]);
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

      </>
      </div>
    );
  }
    
  