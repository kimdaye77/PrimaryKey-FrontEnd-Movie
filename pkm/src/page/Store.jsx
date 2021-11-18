import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Reservation.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

class Store extends Component {
  render(){
    return(
      <div className="Reservation">
        <HeaderBlackVersion />
        <FooterBlack />
      </div>
    );
  }
}

export default Store;