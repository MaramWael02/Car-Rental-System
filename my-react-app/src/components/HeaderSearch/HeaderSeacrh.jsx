import React from 'react';

const HeaderSearch=(props) => {

  
    const handleNavigation = (page) => {
        // Call onFormSwitch with the page parameter to navigate
        props.onClick(page);

      };
    return (
        <div className="App">
            <>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="#">Luxe Driver <span>Rentals</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu" /> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a href='#' onClick={() => handleNavigation('AdminHomePage')} className="nav-link">Home</a></li>
                                <li className="nav-item"><a href='#' onClick={() => handleNavigation('AddCarpage')} className="nav-link">Add Car</a></li>
                                <li className="nav-item"><a href='#' onClick={() => handleNavigation('Reports')} className="nav-link">Reports</a></li>
                                <li className="nav-item"><a href='#' onClick={() => handleNavigation('login')} className="nav-link">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    );
}
export default HeaderSearch;