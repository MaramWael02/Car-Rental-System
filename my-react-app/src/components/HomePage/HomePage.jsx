import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const HomePage=(props) =>{

    return (
        <div>
            <Header onClick={props.onFormSwitch}/>
            <Main />
            <Footer />
        </div>
    );
}
export default HomePage;