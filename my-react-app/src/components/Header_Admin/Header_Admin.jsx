import React from 'react';

const Header_Admin=(props) => {

    const handleButtonClick = (buttonType) => {
        // Handle button click based on the buttonType (e.g., perform actions)
        console.log(`Button ${buttonType} clicked`);
        if (buttonType === 'Reports') {
          props.onFormSwitch('Reports');
        } else if (buttonType === 'AddCar') {
            props.onFormSwitch('AddCarpage');
            }
    };

    return (
        <div className="App">
            <>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="#">LuxeDriver<span>Rentals</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu" /> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a onClick={() => handleButtonClick('Reports')} className="nav-link">Reports</a></li>
                                <li className="nav-item"><a onClick={() => handleButtonClick('AddCar')} className="nav-link">Add Car</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    );
}
export default Header_Admin;