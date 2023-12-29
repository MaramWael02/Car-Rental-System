import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import  {LOGIN}  from './components/login/Login';
import  {REGISTER}  from './components/register/Register';
import HomePage from './components/HomePage/HomePage';
import AdminHomePage from './components/AdminHomePage/Admin_Home';
import { ADDCAR } from './components/AddCarPage/AddCarPage';
import ReportsPage from './components/ReportPage/ReportPage';
import CarPage from './components/CarPage/CarPage';
function App() {
  const [currentForm, setCurrentForm] = useState('login'); // ['login', 'register'
  
  const toggleform = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App"> {
        currentForm === 'login' ? 
        (<LOGIN onFormSwitch={toggleform} /> )

        : currentForm === 'register' ? 
        (<REGISTER onFormSwitch={toggleform} />)

        : currentForm === 'AdminHomePage' ?
        (<AdminHomePage onFormSwitch={toggleform}/>)
        
        : currentForm === 'AddCarpage' ?
        (<ADDCAR onFormSwitch={toggleform}/>)
        : currentForm === 'Reports' ?
        (<ReportsPage onFormSwitch={toggleform}/>)
        : currentForm === 'view-cars' ?
        (<CarPage onFormSwitch={toggleform}/>)
        : currentForm === 'HomePage' ?
        (<HomePage onFormSwitch={toggleform}/>)
        : null
      
      }

    </div>
  );
}

export default App;


