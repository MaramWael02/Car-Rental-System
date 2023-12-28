import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import  {LOGIN}  from './components/login/Login';
import  {REGISTER}  from './components/register/Register';
import HomePage from './components/HomePage/HomePage';

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
        : (<HomePage />)
      
      }

    </div>
  );
}

export default App;


