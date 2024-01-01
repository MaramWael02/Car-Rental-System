import React, { useState } from "react";
import Header_reports from "../Header_reports/Header_reports";

const ReportsPage = (props) => {
    const [reportType, setReportType] = useState('');
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [plate_id, setCarPlateID] = useState('');
    const [day, setCarDay] = useState('');
    const [customer_id, setUsername] = useState('');
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState('');


    const getSelectedTable = () => {
        switch(reportType) {
            case 'reservationPeriod':
                return <ReportTable1 data={tableData} />;
            case 'reservationCarPeriod':
                return <ReportTable2 data={tableData} />;
            case 'CarDay':
                return <ReportTable3 data={tableData} />;
            case 'reservationCustomer':
                return <ReportTable4 data={tableData} />;
            case 'payments':
                return <ReportTable5 data={tableData} />;
            default:
                return null;
        }
    };

    const ReportTable1 = ({ data }) => {
        return (
          <table className="reports-table">
            <thead>
              <tr>
                <th>Reservation ID</th>
                <th>Customer's Username</th>
                <th>Plate ID</th>
                <th>Car Brand</th>
                <th>Reservation Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.reservation_id}</td>
                  <td>{item.customer_id}</td>
                  <td>{item.plate_id}</td>
                  <td>{item.office_id}</td>
                  <td>{item.reservation_date}</td>
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
                <th>Reservation ID</th>
                <th>Reservation Date</th>
                <th>Plate ID</th>
                <th>Car Brand</th>
                <th>Car Model</th>
                <th>Car Year</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.reservation_id}</td>
                  <td>{item.reservation_date}</td>
                  <td>{item.plate_id}</td>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td>{item.year}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };

      const ReportTable3 = ({ data }) => {
        return (
          <table className="reports-table">
            <thead>
              <tr>
                <th>Plate ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.plate_id}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };
      const ReportTable4 = ({ data }) => {
        return (
          <table className="reports-table">
            <thead>
              <tr>
              {/*  <th>First Name</th>
                <th>Last Name</th>*/}
                <th>Username</th>
                <th>Plate ID</th>
               {/* <th>Car Brand</th>
                <th>Car Model</th> */}
                <th>Reservation Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {/*<td>{item.first_name}</td>
                  <td>{item.last_name}</td>*/}
                  <td>{item.customer_id}</td>
                  <td>{item.plate_id}</td>
                  {/*<td>{item.brand}</td>
                  <td>{item.model}</td>*/}
                  <td>{item.reservation_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };

      const ReportTable5 = ({ data }) => {
        return (
          <table className="reports-table">
            <thead>
              <tr>
                <th>Reservation Date</th>
               { <th>Total Payments</th>}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.reservation_date}</td>
                 { <td>{item.total}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        );
      };

    const handleReportTypeChange = (event) => {
        setReportType(event.target.value);
        // Reset other form fields when the report type changes
        setStartDate('');
        setEndDate('');
        setCarPlateID('');
        setCarDay('');
        setUsername('');
        setTableData([]);
    };

    const handleReservationPeriod = async () => {
        try {
          const url = `http://localhost:8000/api/reservation-reports?start_date=${start_date}&end_date=${end_date}`;
          const response = await fetch(url, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                },
            });
            
            if (response.ok) {
            const data = await response.json();
            setTableData(data);
            console.log('handleReservationPeriod successful:', data);
          }
        } catch (error) {
          console.error('Error during handleReservationPeriod:', error);
          setError('Server error');
        }
      };
    const handleReservationCarPeriod = async () => {
        try {
            const url = `http://localhost:8000/api/car-reservations-report?start_date=${start_date}&end_date=${end_date}&plate_id=${plate_id}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (response.ok) {
            const data = await response.json();
            setTableData(data);
            console.log('handleReservationCarPeriod successful:', data);
          }
        } catch (error) {
          console.error('Error during handleReservationCarPeriod:', error);
          setError('Server error');
        }
    };
    const handleCarDay = async () => {
        try {
            const url = `http://localhost:8000/api/car-status-reports?day=${day}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setTableData(data); 
                console.log('handleCarDay successful:', data);
            }
        } catch (error) {
            console.error('Error during handleCarDay:', error);
            setError('Server error');
        }
    };
    const handleReservationCustomer = async () => {
        try {
            const url = `http://localhost:8000/api/customer-reservations-report?customer_id=${customer_id}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });

            if (response.ok) {
                const data = await response.json();
                setTableData(data); 
                console.log('handleReservationCustomer successful:', data);
            }
        } catch (error) {
            console.error('Error during handleReservationCustomer:', error);
            setError('Server error');
        }
    };
    const handlePayments = async () => {
        try {
            const url = `http://localhost:8000/api/payment-reports?start_date=${start_date}&end_date=${end_date}`;
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
    const handleButton = async (e) => {
        e.preventDefault(); // prevents the page from refreshing
        if (reportType === 'reservationPeriod') {
            
            handleReservationPeriod(e);
        }
        else if (reportType === 'reservationCarPeriod') {
            handleReservationCarPeriod(e);
        }
        else if (reportType === 'CarDay'){
            handleCarDay(e);
        }
        else if (reportType === 'reservationCustomer'){
            handleReservationCustomer(e);
        }
        else if (reportType === 'payments'){
            handlePayments(e);
        }
    }
    

    return (
        <div >
            <Header_reports onClick={props.onFormSwitch}/>
            <img alt="background of a car" src="../images/bg_1.jpg" className="background_image" />
            <div>
                <form className="reports-form" >
                    <h1 className="reports-header">Select Report Type</h1>
                    <select className="select-menu" value={reportType} onChange={handleReportTypeChange}>
                        <option value="">Select...</option>
                        <option value="reservationPeriod">Reservation in a Period</option>
                        <option value="reservationCarPeriod">Car Reservations in a Period</option>
                        <option value="CarDay">Status of a Car in a Day</option>
                        <option value="reservationCustomer">Customer Reservations</option>
                        <option value="payments">Daily Payments in a Period</option>
                    </select>

                    {reportType === 'reservationPeriod' && (
                        <div className="report-subform">
                            <label className="reports-label">Start Date:</label>
                            <input
                                type="date"
                                value={start_date}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <label className="reports-label">End Date:</label>
                            <input
                                type="date"
                                value={end_date}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    )}
                    {reportType === 'reservationCarPeriod' && (
                        <div className="report-subform">
                            <label className="reports-label">Car's Plate ID:</label>
                            <input
                                value={plate_id}
                                onChange={(e) => setCarPlateID(e.target.value)}
                            />
                            <label className="reports-label">Start Date:</label>
                            <input
                                type="date"
                                value={start_date}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <label className="reports-label">End Date:</label>
                            <input
                                type="date"
                                value={end_date}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    )}
                    {reportType === 'CarDay' && (
                        <div className="report-subform">
                            <label className="reports-label">Day</label>
                            <input
                                type="date"
                                value={day}
                                onChange={(e) => setCarDay(e.target.value)}
                            />
                        </div>
                    )}
                    {reportType === 'reservationCustomer' && (
                        <div className="report-subform">
                            <label className="reports-label">Customer's username</label>
                            <input
                                value={customer_id}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    )}
                    {reportType === 'payments' && (
                        <div className="report-subform">
                            <label className="reports-label">Start Date:</label>
                            <input
                                type="date"
                                value={start_date}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <label className="reports-label">End Date:</label>
                            <input
                                type="date"
                                value={end_date}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    )}

                    <button className="reportbutton" onClick={handleButton} type="submit">Generate Report</button>
                {getSelectedTable()}
                </form>
            </div>
        </div>
    );
};

export default ReportsPage;
