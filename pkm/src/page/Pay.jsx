import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Pay.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
function Pay(){
  
    return(
      <div className="Pay">
        <HeaderBlackVersion />
        <div className="pay_content">
          <p className="pay_title">결제 완료</p>
        </div>
        <FooterBlack />
      </div>
    );
}
export default Pay;