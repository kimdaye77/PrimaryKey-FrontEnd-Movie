import React from 'react';
import {NavLink} from "react-router-dom";
import blacklogo from '../asset/logo_b.png';
import person from '../asset/person_b.png';
import language from '../asset/language_b.png';
import search from '../asset/search_b.png';
import menu from '../asset/menu_b.png';
import '../css/reset.css';
import '../css/HeaderBlackVersion.css';


function HeaderBlackVersion() {
    
  return(
    <div className="Header_b">
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
        <>
          <li><NavLink to = "/Movie">영화</NavLink></li>
          <li><NavLink to = "/Reservation">예매</NavLink></li>
          <li><NavLink to = "/Theater">극장</NavLink></li>
          <li><NavLink exact to = "/"><img src={blacklogo} className="logo" alt="logo"/></NavLink></li>
          <li><NavLink to = "/Event">이벤트</NavLink></li>
          <li><NavLink to = "/Store">스토어</NavLink></li>
          <li><NavLink to = "/Benefit">혜택</NavLink></li>
        </>
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

export default HeaderBlackVersion;