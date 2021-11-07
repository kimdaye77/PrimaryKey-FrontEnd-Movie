import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Reservation.css';
import Footer_black from '../component/Footer_black.jsx';
import Header_black_version from '../component/Header_black_version.jsx';

class Reservation extends Component {
  render(){
    return(
      <div className="Reservation">
        <Header_black_version />
        <Footer_black />
      </div>
    );
  }
}

export default Reservation;