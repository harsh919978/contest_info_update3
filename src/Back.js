import React from "react";
import LoginImg from './component/login.jpeg'
import Login from "./Login";
export default function Back() {
    return(
        
        <div className="login--page">
        <img src= {LoginImg} id="login" alt="login" />
        
          <div id="cover">
          </div>
        </div>
    )
}