import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Pay.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

class Pay extends Component {
  render(){
    return(
      <div className="Pay">
        <HeaderBlackVersion />
        <FooterBlack />
      </div>
    );
  }
}

export default Pay;