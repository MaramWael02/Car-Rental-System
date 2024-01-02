    import Header from "../Header/Header";
    import Footer from "../Footer/Footer";
    import React, { useState } from "react";

const CustomerSearch = (props) =>{
    const [cars, setCars] = useState([]);
    const [searchType, setSearchType] = useState('');
    const [carBrand, setCarBrand] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carPrice, setCarPrice] = useState('');
    const [carOffice, setCarOffice] = useState('');
    const [carPlate, setCarPlate] = useState();
    const [error, setError] = useState('');
    const handleNavigation = (page) => {
        props.onClick(page, props.username);
      }
    const handleCarPlate = async () => {
        try {
            const url = `http://localhost:8000/api/car-plate?plate_id=${carPlate}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setCars(data); 
                console.log('handleCarPlate:', data);
            }
        } catch (error) {
            console.error('Error during handleCarPlate:', error);
            setError('Server error');
        }
    };

    const getSelectedTable = () => {
        switch(searchType) {
            case 'carBrand':
                return <CarBox  data={cars} />;
            case 'carModel':
                return <CarBox  data={cars} />;
            case 'carYear':
                return <CarBox  data={cars} />;
            case 'carPrice':
                return <CarBox  data={cars} />;
            case 'carOffice':
                return <CarBox data={cars} />;
            case 'carPlate':
                return <CarBox data={cars} />;
        }
    };
    const handleReportTypeChange = (event) => {
        setSearchType(event.target.value);
        // Reset other form fields when the report type changes
        setCarBrand('');
        setCarModel('');
        setCarYear('');
        setCarPrice('');
        setCarOffice('');
        setCarPlate('');
    };
    const CarBox = ({}) => {
        return (
            <section className="ftco-section bg-light">
            <div className="container">
              <div className="row">
                {cars.map((car, index) => (
                  <div key={index} className="col-md-4">
                    <div className="car-wrap rounded ftco-animate">
                      <div className="img rounded d-flex align-items-end" style={{ backgroundImage: `url(${"images/"}${car.image})`, zIndex:1}}>
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
        );
    }
    const handleCarOffice = async () => {
        try {
            const url = `http://localhost:8000/api/car-office?office_id=${carOffice}`;
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

    const handleCarBrand = async () => {
        try {
          const url = `http://localhost:8000/api/car-brand?brand=${carBrand}`;
          const response = await fetch(url, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                },
            });
            
            if (response.ok) {
            const data = await response.json();
            setCars(data);
            console.log('handleCarBrand', data);
          }
        } catch (error) {
          console.error('Error during handleCarBrand:', error);
          setError('Server error');
        }
      };
    const handleCarModel = async () => {
        try {
            const url = `http://localhost:8000/api/car-model?model=${carModel}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (response.ok) {
            const data = await response.json();
            setCars(data);
            console.log('handleCarModel:', data);
          }
        } catch (error) {
          console.error('Error during handleCarModel:', error);
          setError('Server error');
        }
    };
    const handleCarYear = async () => {
        try {
            const url = `http://localhost:8000/api/car-year?year=${carYear}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setCars(data); 
                console.log('handleCarYear successful:', data);
            }
        } catch (error) {
            console.error('Error during handleCarDay:', error);
            setError('Server error');
        }
    };
    const handleCarPrice = async () => {
        try {
            const url = `http://localhost:8000/api/car-price?price=${carPrice}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setCars(data); 
                console.log('handleCarPrice:', data);
            }
        } catch (error) {
            console.error('Error during handleCarPrice:', error);
            setError('Server error');
        }
    };
    const handleButton = async (e) => {
        e.preventDefault(); // prevents the page from refreshing
       if(searchType === 'carBrand'){
            handleCarBrand();
       }
       else if(searchType === 'carModel'){
            handleCarModel();
       }
       else if(searchType === 'carYear'){
            handleCarYear();
       }
       else if(searchType === 'carPrice'){
            handleCarPrice();
       }
       else if(searchType === 'carOffice'){
            handleCarOffice();
       }
       else if(searchType === 'carPlate'){
            handleCarPlate();
       }
    }
    return (
        <div >
            <Header onClick={props.onFormSwitch} username={props.username}/>
            <img alt="background of a car" src="../images/bg_1.jpg" className="background_image" />
            <div>
                <form className="reports-form" >
                    <h1 className="reports-header">Search By</h1>
                    <select className="select-menu" value={searchType} onChange={handleReportTypeChange}>
                        <option value="">Select...</option>
                        <option value="carBrand">Car Brand</option>
                        <option value="carModel">Car Model</option>
                        <option value="carYear">Car Year</option>
                        <option value="carPrice">Car Price</option>
                        <option value="carOffice">Car Office</option>
                        <option value="carPlate">Car Plate</option>
                    </select>

                    {searchType === 'carBrand' && (
                        <div className="report-subform">
                            <label className="reports-label">Car Brand</label>
                            <input
                                type="text"
                                value={carBrand}
                                onChange={(e) => setCarBrand(e.target.value)}
                            />
                        </div>
                    )}
                    {searchType === 'carModel' && (
                        <div className="report-subform">
                            <label className="reports-label">Car Model</label>
                            <input
                                type="text"
                                value={carModel}
                                onChange={(e) => setCarModel(e.target.value)}
                            />
                        </div>
                    )}
                    {searchType === 'carYear' && (
                        <div className="report-subform">
                            <label className="reports-label">Car Year</label>
                            <input
                                type="text"
                                value={carYear}
                                onChange={(e) => setCarYear(e.target.value)}
                            />
                        </div>
                    )}
                    {searchType === 'carPrice' && (
                        <div className="report-subform">
                            <label className="reports-label">Car Price</label>
                            <input
                                type="text"
                                value={carPrice}
                                onChange={(e) => setCarPrice(e.target.value)}
                            />
                        </div>
                    )}
                    {searchType === 'carOffice' && (
                        <div className="report-subform">
                            <label className="reports-label">Car Office</label>
                            <input
                                type="text"
                                value={carOffice}
                                onChange={(e) => setCarOffice(e.target.value)}
                            />
                        </div>
                    )}
                    {searchType === 'carPlate' && (
                        <div className="report-subform">
                            <label className="reports-label">Car Plate</label>
                            <input
                                type="text"
                                value={carPlate}
                                onChange={(e) => setCarPlate(e.target.value)}
                            />
                        </div>
                    )}
                 


                    <button className="reportbutton" onClick={handleButton} type="submit">Search</button>
                {getSelectedTable()}
                </form>
            </div>
        </div>
    );
 }
 export default CustomerSearch;