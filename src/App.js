import React, { Fragment , useEffect, useState} from "react";
import "./index.css"

import {FetchDefaultFromApi,BasicModal} from "./functions/functions.js"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";


import logo from './logo.svg';
import './App.css';

export default function Main() {

  const element = <h1>REACT STORE</h1>;
  
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        {element}
        <FetchDefaultFromApi/>
        <br/> <br/> <br/>
      </header>
      
    </div>
   
  );
}

