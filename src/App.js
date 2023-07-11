import logo from './logo.svg';
import './App.css';
import Website from "./Website";
import Login from'./Login'
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Register from "./Register"
import LoginImg from './component/login.jpeg'
function App() {
   const[decide,setdecide]=React.useState("login")
   const[validated,setvalidated]=React.useState(false);
   function togglepage(page)
   {
    setdecide(page)
   }
   function onregister(obj)
   {
    
    console.log(obj)
   }
  return (
   
    <>
        
        <Router>
        <Routes>
         <Route path="/" element={<Login />}/>
         <Route path="/register" element={<Register />}/>
         <Route path="/website" element={<Website />}/>
        </Routes>
        </Router>
          
      
    
    
    {validated && <Website />}
    </>
  );
}

export default App;
