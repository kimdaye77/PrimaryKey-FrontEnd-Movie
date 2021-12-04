import React from 'react';
import {NavLink} from "react-router-dom";
import blacklogo from '../asset/logo_b.png';
import person from '../asset/person_b.png';
import language from '../asset/language_b.png';
import search from '../asset/search_b.png';
import menu from '../asset/menu_b.png';
import '../css/reset.css';
import '../css/HeaderBlackVersion.css';
import { getUser, getToken, removeUserSession } from '../utils/Common.js';
 
import { withRouter } from 'react-router-dom';

function HeaderBlackVersion(props) {
  const user = getUser();
  const token = getToken();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    document.location.href = '/';
  }
 
  return(
    <div className="Header_b">
      <div className="information">
      <div>
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