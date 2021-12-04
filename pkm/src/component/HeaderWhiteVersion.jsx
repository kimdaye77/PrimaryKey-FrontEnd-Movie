import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../asset/logo.png';
import person from '../asset/person.png';
import language from '../asset/language.png';
import search from '../asset/search.png';
import menu from '../asset/menu.png';
import '../css/reset.css';
import '../css/HeaderWhiteVersion.css';
import '../App.css';
import { getToken, getUser, removeUserSession } from '../utils/Common.js';

import { withRouter } from 'react-router-dom';


function HeaderWhiteVersion(props) {
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    document.location.href = '/';
  }
    return(
      <div className="Header">
        <div className="information">
        {getToken()==null? (
        <nav>
          <ul>
            <li><NavLink to = "/Login">로그인</NavLink></li>
            <li>회원가입</li>
            <li>ENGLISH</li>
            <li><img src={language} className="language" alt="language" /></li>
          </ul>
        </nav>):(
          <div>
            <span>{getUser()}님 환영합니다.</span>
            <br /><br />
            <span className="mypage"><NavLink to = "/Mypage">마이페이지</NavLink></span>
          <input type="button" onClick={handleLogout} value="Logout" />
        </div>
        )}
      </div>
      <div className="Navigation">
        <nav>
          <img src={menu} className="menu" alt="menu"/>
          <ul>
          <>
            <li><NavLink to = "/Movie">영화</NavLink></li>
            <li><NavLink to = "/Reservation">예매</NavLink></li>
            <li><NavLink to = "/Theater">극장</NavLink></li>
            <li><NavLink exact to = "/"><img src={logo} className="logo" alt="logo"/></NavLink></li>
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

export default HeaderWhiteVersion;