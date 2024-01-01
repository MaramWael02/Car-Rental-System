import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {CarList} from "../Car/Car";

const CarPage=(props) =>{
    return(
        <div>
            <Header onClick={props.onFormSwitch} username={props.username}/>
            <CarList onClick={props.onFormSwitch}/>
            <Footer />
        </div>
    );
}
export default CarPage;