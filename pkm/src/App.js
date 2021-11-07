import Home from './page/Home.jsx';
import Reservation from './page/Reservation.jsx';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div className = "App">
      <Home />
      <Reservation /> 
      {/* 임시로 확인 */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component = {Home} />
          <Route path="/Reservation" component = {Reservation} />
        </Routes>
      </BrowserRouter>


    </div>
    

  );
}

export default App;