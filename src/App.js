import TextForm from './components/TextForm';
import './App.css';
import Alert from './components/alert';
import Navbar from './components/Navbar';
import About from './components/About';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type: type
    })
     setTimeout(() => {
      setAlert(null);
     }, 1000);
  }
  
  const ToggleMode = () => {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#163854';
        showAlert("Dark Mode Has been Enabled","success");
        document.title = "Siddharth - Textutils Dark Mode";
        // setInterval(() => {
        //   document.title = 'Siddharth Text Converter App is Amazing';
        // }, 2000);
        // setInterval(() => {
        //   document.title = 'Install AntiVirus now';
        // }, 1500);
      }    
      else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has been Enabled","success");
      document.title = "Siddharth - Textutils Light Mode";
      // setInterval(() => {
      //   document.title = 'Install Sidd Apk now';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Install Textutil now';
      // }, 2000);
  }
}

  return (
  <>
  <Router>
    <Navbar title="Siddharth" mode = {mode} ToggleMode={ToggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

      <Routes>
        {/* /users ---> component 1
        /users/Home ---> component 2 */}
        <Route exact path="/About" element ={<About/>}/>
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Enter the text to below" mode = {mode}/>}/>
      </Routes>
    {/* <About/> */}
    </div>
      </Router>
  </>
  );
}
 
export default App;
