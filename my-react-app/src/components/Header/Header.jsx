import React from 'react';

const Header=(props) => {
    const handleNavigation = (page) => {
        props.onClick(page);
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
                                <li className="nav-item active"><a href="#" className="nav-link" onClick={() => handleNavigation('HomePage')}>Home</a></li>
                                <li className="nav-item"><a href="#" className="nav-link" onClick={() => handleNavigation('view-cars')}>Cars</a></li>
                                <li className="nav-item"><a href="#" className="nav-link" onClick={() => handleNavigation('login')}>Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    );
}
export default Header;