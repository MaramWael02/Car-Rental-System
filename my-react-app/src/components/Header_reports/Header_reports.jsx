import React from 'react';

const Header_reports=(props) => {

  
    const handleNavigation = (page) => {
        // Call onFormSwitch with the page parameter to navigate
        if (page === 'AdminHomePage')

        {
            props.onClick('AdminHomePage');
        }
        else if (page === 'AddCarPage'){
            props.onClick('AddCarpage');
        }
        else if (page === 'login'){
            props.onClick('login');
        }
        else if (page === 'Search'){
            props.onClick('SearchPage');
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
                                <li className="nav-item active"><a href='#' onClick={() => handleNavigation('AdminHomePage')} className="nav-link">Home</a></li>
                                <li className="nav-item"><a href='#' onClick={() => handleNavigation('AddCarPage')} className="nav-link">Add Car</a></li>
                                <li className="nav-item"><a href='#' onClick={() => handleNavigation('Search')} className="nav-link">Search</a></li>
                                <li className="nav-item"><a href='#' onClick={() => handleNavigation('login')} className="nav-link">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    );
}
export default Header_reports;