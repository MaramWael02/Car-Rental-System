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
      <div>
        <h2>List of Cars</h2>
        <ul>
          {cars.map((car) => (
            <li key={car.id}>{car.model}</li> // Adjust this to match your car data structure
          ))}
        </ul>
      </div>
    );
  }
    
  