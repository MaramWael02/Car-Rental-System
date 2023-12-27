import logo from './logo.svg';
import React, {useState} from 'react';
//import './App.css';
import { LOGIN } from './components/login/Login';
import { REGISTER } from './components/register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  /*const [currentForm, setCurrentForm] = useState('login'); // ['login', 'register'
  
  const toggleform = (formName) => {
    setCurrentForm(formName);
  }*/

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;


/*switching with between div tags {
        currentForm == 'login' ? <LOGIN onFormSwitch={toggleform} /> : <REGISTER onFormSwitch={toggleform}/> 
      }*/