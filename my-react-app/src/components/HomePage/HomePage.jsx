import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const HomePage = ({ onFormSwitch}) => {

    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};
export default HomePage;