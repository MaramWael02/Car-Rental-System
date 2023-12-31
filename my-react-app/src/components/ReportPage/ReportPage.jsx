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

    const ReportTable1 = ({ data }) => {
        return (
          <table>
            <thead>
              <tr>
                <th>Reservation ID</th>
                <th>Customer's Username</th>
                <th>Plate ID</th>
                <th>Office ID</th>
                <th>Reservation Date</th>
                {/*ADD MORE COLUMNS AS NEEDEDDDD */}
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

    const handleReportTypeChange = (event) => {
        setReportType(event.target.value);
        // Reset other form fields when the report type changes
        setStartDate('');
        setEndDate('');
        setCarPlateID('');
        setCarDay('');
        setUsername('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform actions based on the selected report type and form data
        // For example, send an API request to fetch the selected report
        console.log('Report Type:', reportType);
        console.log('Start Date:', start_date);
        console.log('End Date:', end_date);
        console.log('Car Plate ID:', plate_id);
        console.log('Car Day:', day);
        console.log('Username:', customer_id);
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
            alert('In Response ok');
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
                <form className="reports-form" onSubmit={handleButton}>
                    <h1 className="reports-header">Select Report Type</h1>
                    <select className="select-menu" value={reportType} onChange={handleReportTypeChange}>
                        <option value="">Select...</option>
                        <option value="reservationPeriod">Reservation in a Period</option>
                        <option value="reservationCarPeriod">Car Reservations in a Period</option>
                        <option value="CarDay">Status of a Car in a Day</option>
                        <option value="reservationCustomer">Customer Reservations</option>
                        <option value="payments">Daily Payments in a Period</option>
                        {/* Add more options for different report types */}
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

                    <button className="reportbutton" type="submit">Generate Report</button>
                {tableData.length > 0 && <ReportTable1 data={tableData} />}
                </form>
            </div>
        </div>
    );
};

export default ReportsPage;
