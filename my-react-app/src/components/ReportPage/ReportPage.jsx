import React, { useState } from "react";
import Header_reports from "../Header_reports/Header_reports";

const ReportsPage = (props) => {
    const [reportType, setReportType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [carPlateID, setCarPlateID] = useState('');
    const [CarDay, setCarDay] = useState('');
    const [username, setUsername] = useState('');

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
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Car Plate ID:', carPlateID);
        console.log('Car Day:', CarDay);
        console.log('Username:', username);
    };

    return (
        <div >
            <Header_reports onClick={props.onFormSwitch}/>
            <img alt="background of a car" src="../images/bg_1.jpg" className="background_image" />
            <div>
                <form className="reports-form">
                    <h1 className="reports-header">Select Report Type</h1>
                    <select value={reportType} onChange={handleReportTypeChange}>
                        <option value="">Select...</option>
                        <option value="reservationPeriod">Reservation in a Period</option>
                        <option value="reservationCarPeriod">Car Reservations in a Period</option>
                        <option value="CarDay">Status of a Car in a Day</option>
                        <option value="reservationCustomer">Customer Reservations</option>
                        <option value="payments">Daily Payments in a Period</option>
                        {/* Add more options for different report types */}
                    </select>

                    {reportType === 'reservationPeriod' && (
                        <form onSubmit={handleSubmit}>
                            <label className="reports-label">Start Date:</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <label className="reports-label">End Date:</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                            <button className="reportbutton" type="submit">Generate Report</button>
                        </form>
                    )}
                    {reportType === 'reservationCarPeriod' && (
                        <form onSubmit={handleSubmit}>
                            <label className="reports-label">Car's Plate ID:</label>
                            <input
                                value={carPlateID}
                                onChange={(e) => setCarPlateID(e.target.value)}
                            />
                            <label className="reports-label">Start Date:</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <label className="reports-label">End Date:</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                            <button className="reportbutton" type="submit">Generate Report</button>
                        </form>
                    )}
                    {reportType === 'CarDay' && (
                        <form onSubmit={handleSubmit}>
                            <label>Day</label>
                            <input
                                type="date"
                                value={CarDay}
                                onChange={(e) => setCarDay(e.target.value)}
                            />
                            <button className="reportbutton" type="submit">Generate Report</button>
                        </form>
                    )}
                    {reportType === 'reservationCustomer' && (
                        <form onSubmit={handleSubmit}>
                            <label className="reports-label">Customer's username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <button className="reportbutton" type="submit">Generate Report</button>
                        </form>
                    )}
                    {reportType === 'payments' && (
                        <form onSubmit={handleSubmit}>
                            <label className="reports-label">Start Date:</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <label className="reports-label">End Date:</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                            <button className="reportbutton" type="submit">Generate Report</button>
                        </form>

                    )}


                </form>
            </div>
        </div>
    );
};

export default ReportsPage;
