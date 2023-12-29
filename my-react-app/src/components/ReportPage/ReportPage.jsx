import React, {useState} from "react";
import Header_reports from "../Header_reports/Header_reports";

const ReportsPage = () => {
    const [reportType, setReportType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [carBrand, setCarBrand] = useState('');

    const handleReportTypeChange = (event) => {
        setReportType(event.target.value);
        // Reset other form fields when the report type changes
        setStartDate('');
        setEndDate('');
        setCarBrand('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform actions based on the selected report type and form data
        // For example, send an API request to fetch the selected report
        console.log('Report Type:', reportType);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Car Brand:', carBrand);
    };

    return (
        <div >
            <Header_reports />
            <img alt="background of a car" src="../images/bg_1.jpg" className="background_image" />
            <div>
                <form className="reports-form">
                    <h1 className="reports-label">Select Report Type</h1>
                    <select value={reportType} onChange={handleReportTypeChange}>
                        <option value="">Select...</option>
                        <option value="reservationPeriod">Reservation in a Period</option>
                        <option value="carReservations">Car Reservations</option>
                        {/* Add more options for different report types */}
                    </select>

                    {reportType === 'reservationPeriod' && (
                        <form onSubmit={handleSubmit}>
                            <label>Start Date:</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <label>End Date:</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                            <button type="submit">Generate Report</button>
                        </form>
                    )}

                    {reportType === 'carReservations' && (
                        <form onSubmit={handleSubmit}>
                            <div > 
                            <label >Car Brand:</label>
                            <input
                                type="text"
                                value={carBrand}
                                onChange={(e) => setCarBrand(e.target.value)}
                            />
                            <button type="submit">Generate Report</button>
                            </div>
                        </form>
                    )}

                </form>
            </div>
        </div>
    );
};

export default ReportsPage;
