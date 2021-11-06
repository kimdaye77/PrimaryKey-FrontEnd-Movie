import Home from './page/Home.jsx';
import Reservation from './page/Reservation.jsx';
import Footer from './component/Footer.jsx';
import Header_white_version from './component/Header_white_version.jsx';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div className = "App">
      <Header_white_version />
      <Home />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component = {Home} />
          <Route path="/Reservation" component = {Reservation} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
    

  );
}

export default App;