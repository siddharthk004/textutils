import TextForm from './components/TextForm';
import './App.css';
import Alert from './components/alert';
import Navbar from './components/Navbar';
import About from './components/About';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
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

  const RemoveBodyClass = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  
  const ToggleMode = (cls) => {
    RemoveBodyClass();
    console.log(cls)
    document.body.classList.add('bg-'+cls)

    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#163854';
        // showAlert("Dark Mode Has been Enabled","success");
        // document.title = "Siddharth - Textutils Dark Mode";
      }    
      else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light Mode Has been Enabled","success");
      // document.title = "Siddharth - Textutils Light Mode";
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
      <Navbar title="Siddharth" mode={mode} ToggleMode={ToggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/About" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils : Word Counter , Character Counter " mode={mode} />} />
        </Routes>
      </div>
    </Router>
  </>
);
}
export default App;
