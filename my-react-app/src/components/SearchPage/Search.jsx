import React, { useState } from "react";
import HeaderSearch from "../HeaderSearch/HeaderSeacrh";

const SearchPage = (props) => {
    const [searchType, setSearchType] = useState('');
    const [carBrand, setCarBrand] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carPrice, setCarPrice] = useState('');
    const [carOffice, setCarOffice] = useState('');
    const [carPlate, setCarPlate] = useState();
    const[custUsername, setCustUsername] = useState('');
    const[custFirstName, setCustFirstName] = useState('');
    const[custLastName, setCustLastName] = useState('');
    const[custLicense, setCustLicense] = useState('');
    const[tableData, setTableData] = useState([]);
    const [error, setError] = useState('');


    const getSelectedTable = () => {
        switch(searchType) {
            case 'carBrand':
                return <ReportTable1 data={tableData} />;
            case 'carModel':
                return <ReportTable1 data={tableData} />;
            case 'carYear':
                return <ReportTable1 data={tableData} />;
            case 'carPrice':
                return <ReportTable1 data={tableData} />;
            case 'carOffice':
                return <ReportTable1 data={tableData} />;
            case 'carPlate':
                return <ReportTable1 data={tableData} />;
            case 'custUsername':
                return <ReportTable2 data={tableData} />;
            case 'custFirstName':
                return <ReportTable2 data={tableData} />;
            case 'custLastName':
                return <ReportTable2 data={tableData} />;
            case 'custLicense':
                return <ReportTable2 data={tableData} />;
            default:
                return null;
        }
    };

    const ReportTable1 = ({ data }) => {
        return (
          <table className="reports-table">
            <thead>
              <tr>
                <th>Car Brand</th>
                <th>Car Model</th>
                <th>Car Year</th>
                <th>Car Price</th>
                <th>Car Office </th>
                <th>Car License</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td>{item.year}</td>
                  <td>{item.price}</td>
                  <td>{item.office_id}</td>
                  <td>{item.plate_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };
      const ReportTable2 = ({ data }) => {
        return (
          <table className="reports-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>First name</th>
                <th>Last Name</th>
                <th>License</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.customer_id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.car_license}</td>
                  <td>{item.address}</td>
                  <td>{item.phone_no}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
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
        setCustUsername('');
        setCustFirstName('');
        setCustLastName('');
        setCustLicense('');
        setTableData([]);
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
            setTableData(data);
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
            setTableData(data);
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
                setTableData(data); 
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
                setTableData(data); 
                console.log('handleCarPrice:', data);
            }
        } catch (error) {
            console.error('Error during handleCarPrice:', error);
            setError('Server error');
        }
    };
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
                setTableData(data); 
                console.log('handlePayments successful:', data);
            }
        } catch (error) {
            console.error('Error during handlePayments:', error);
            setError('Server error');
        }
    };
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
                setTableData(data); 
                console.log('handleCarPlate:', data);
            }
        } catch (error) {
            console.error('Error during handleCarPlate:', error);
            setError('Server error');
        }
    };
    const handleCustUsername = async () => {
        try {
            const url = `http://localhost:8000/api/customer-username?username=${custUsername}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setTableData(data); 
                console.log('handleCustUsername:', data);
            }
        } catch (error) {
            console.error('Error during handleCustUsername:', error);
            setError('Server error');
        }
    };
    const handleCustFirstName = async () => {
        try {
            const url = `http://localhost:8000/api/customer-first-name?first_name=${custFirstName}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setTableData(data); 
                console.log('handleCustFirstName:', data);
            }
        } catch (error) {
            console.error('Error during handleCustFirstName:', error);
            setError('Server error');
        }
    };
    const handleCustLastName = async () => {
        try {
            const url = `http://localhost:8000/api/customer-last-name?last_name=${custLastName}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setTableData(data); 
                console.log('handleCustLastName:', data);
            }
        } catch (error) {
            console.error('Error during handleCustLastName:', error);
            setError('Server error');
        }
    };
    const handleCustLicense = async () => {
        try {
            const url = `http://localhost:8000/api/customer-license?license=${custLicense}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setTableData(data); 
                console.log('handleCustLicense:', data);
            }
        } catch (error) {
            console.error('Error during handleCustLicense:', error);
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
       else if(searchType === 'custUsername'){
            handleCustUsername();
       }
       else if(searchType === 'custFirstName'){
            handleCustFirstName();
       }
       else if(searchType === 'custLastName'){
            handleCustLastName();
       }
       else if(searchType === 'custLicense'){
            handleCustLicense();
       }
    }
    

    return (
        <div >
            <HeaderSearch onClick={props.onFormSwitch}/>
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
                        <option value="custUsername">Customer Username</option>
                        <option value="custFirstName">Customer First Name</option>
                        <option value="custLastName">Customer Last Name</option>
                        <option value="custLicense">Customer License</option>
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
                    {searchType === 'custUsername' && (
                        <div className="report-subform">
                            <label className="reports-label">Customer Username</label>
                            <input
                                type="text"
                                value={custUsername}
                                onChange={(e) => setCustUsername(e.target.value)}
                            />
                        </div>
                    )}
                    {searchType === 'custFirstName' && (
                        <div className="report-subform">
                            <label className="reports-label">Customer First Name</label>
                            <input
                                type="text"
                                value={custFirstName}
                                onChange={(e) => setCustFirstName(e.target.value)}
                            />
                        </div>
                    )}
                    {searchType === 'custLastName' && (
                        <div className="report-subform">
                            <label className="reports-label">Customer Last Name</label>
                            <input
                                type="text"
                                value={custLastName}
                                onChange={(e) => setCustLastName(e.target.value)}
                            />
                        </div>
                    )}
                    {searchType === 'custLicense' && (
                        <div className="report-subform">
                            <label className="reports-label">Customer License</label>
                            <input
                                type="text"
                                value={custLicense}
                                onChange={(e) => setCustLicense(e.target.value)}
                            />
                        </div>
                    )}


                    <button className="reportbutton" onClick={handleButton} type="submit">Search</button>
                {getSelectedTable()}
                </form>
            </div>
        </div>
    );
};

export default SearchPage;
