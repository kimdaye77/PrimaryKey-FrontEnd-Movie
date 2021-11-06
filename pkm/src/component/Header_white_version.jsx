import React, {Fragment} from 'react';
import {NavLink, BrowserRouter} from "react-router-dom";
import logo from '../asset/logo_white.png';
import '../css/reset.css';
import '../css/Header_white_version.css';


function Header_white_version() {
    
    return(
      <div className="Header">
        <div className="information">
        <nav>
          <ul>
            <p>로그인</p>
            <p>회원가입</p>
            <p>ENGLISH</p>
          </ul>
        </nav>
      </div>
      <div className="Navigation">
        <nav>
            <ul>
            <BrowserRouter>
                <li><NavLink to = "/Movie">영화</NavLink></li>
                <li><NavLink to = "/Reservation">예매</NavLink></li>
                <li><NavLink to = "/Theater">극장</NavLink></li>
                <NavLink exact to = "/"><img src={logo} className="App-logo" alt="logo"/></NavLink>
                <li><NavLink to = "/Event">이벤트</NavLink></li>
                <li><NavLink to = "/Store">스토어</NavLink></li>
                <li><NavLink to = "/Benefit">혜택</NavLink></li>
            </BrowserRouter>
            </ul>
        </nav>
      </div>
      </div>
      
      
    );
}

export default Header_white_version;