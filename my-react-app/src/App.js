import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { LOGIN } from './Login';
import { REGISTER } from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login'); // ['login', 'register'
  
  const toggleform = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm == 'login' ? <LOGIN onFormSwitch={toggleform} /> : <REGISTER onFormSwitch={toggleform}/> 
      }
      
    </div>
  );
}

export default App;
