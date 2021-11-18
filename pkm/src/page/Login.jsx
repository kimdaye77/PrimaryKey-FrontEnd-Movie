import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Login.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

class Login extends Component {
  render(){
    return(
      <div className="Login">
        <HeaderBlackVersion />
        <div className="login">
            <p className="login_title">로그인</p>
            <div className="login_box">
              <div className="member_chk">
                <a href=""><p className="member">회원 로그인</p></a>
                <a href=""><p className="notmember">비회원 로그인</p></a>
              </div>
              <form action="#">
                <label htmlFor="loginid" className="labelid">ID</label>
                <input type="text" id="loginid" />
                <label htmlFor="loginpw" className="labelpw">PASSWORD</label>
                <input type="password" id="loginpw" />
                <div className="searchwrap">
                  <p class="txt">아이디 또는 비밀번호를 잊으셨나요?</p>
                  <div className="chk">
                    <input type="checkbox" id="idchk"/>
                    <label htmlFor="idchk">아이디 저장</label>
                  </div>
                  <div className="lg_search">
                    <a href="#">ID/PW 찾기</a>
                  </div>
                </div>
                
                <div class="btnwrap">
                  <input type="submit" id = "loginbtn" value="로그인"/>
                </div>
                <div className="sign">
                  <p>아직 회원이 아니시라면?</p>
                  <a href="#">회원가입</a>
                </div>
              </form>
            </div>
            
        </div>
        <FooterBlack />
      </div>
    );
  }
}

export default Login;