import React, {Fragment} from 'react';
import {NavLink, BrowserRouter} from "react-router-dom";
import logo from '../asset/logo_white.png';
import person from '../asset/person.png';
import language from '../asset/language.png';
import search from '../asset/search.png';
import menu from '../asset/menu.png';
import '../css/reset.css';
import '../css/Header_white_version.css';
import '../App.css';


function Header_white_version() {
    
    return(
      <div className="Header">
        <div className="information">
        <nav>
          <ul>
            <p>로그인</p>
            <p>회원가입</p>
            <p>ENGLISH</p>
            <p><img src={language} className="language" alt="language" /></p>
          </ul>
        </nav>
      </div>
      <div className="Navigation">
        <nav>
          <img src={menu} className="menu" alt="menu"/>
          <ul>
          <BrowserRouter>
            <li><NavLink to = "/Movie">영화</NavLink></li>
            <li><NavLink to = {"/Reservation"}>예매</NavLink></li>
            <li><NavLink to = "/Theater">극장</NavLink></li>
            <li><NavLink exact to = {"/"}><img src={logo} className="logo" alt="logo"/></NavLink></li>
            <li><NavLink to = "/Event">이벤트</NavLink></li>
            <li><NavLink to = "/Store">스토어</NavLink></li>
            <li><NavLink to = "/Benefit">혜택</NavLink></li>
          </BrowserRouter>
          </ul>
          <div className="icon">
            <img src={search} className="search" alt="search"/>
            <img src={person} className="person" alt="person"/>
          </div>
        </nav>
      </div>
      </div>
      
      
    );
}

export default Header_white_version;