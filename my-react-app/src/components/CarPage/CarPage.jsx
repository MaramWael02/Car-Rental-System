import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {CarList} from "../Car/Car";

const CarPage=(props) =>{
    return(
        <div>
            <Header onClick={props.onFormSwitch}/>
            <CarList />
            <Footer />
        </div>
    );
}
export default CarPage;