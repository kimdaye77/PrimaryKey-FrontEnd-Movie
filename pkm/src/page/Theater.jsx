import React, { Component } from 'react';
import TheaterList from '../component/TheaterList.jsx';
import '../css/reset.css';
import '../css/Reservation.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

class Theater extends Component {
  render(){
    return(
      <div className="Reservation">
        <HeaderBlackVersion />
        <p className="theater_title">전체극장</p>
        <div className="theater">
          <TheaterList/>
        </div>
        <FooterBlack />
      </div>
    );
  }
}

export default Theater;