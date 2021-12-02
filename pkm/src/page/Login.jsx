import React, { useState, useFormInput, state, Component } from 'react';
import Home from './Home.jsx';
import axios from 'axios';
import { setUserSession, getToken, getUser } from '../utils/Common.js';
import '../css/reset.css';
import '../css/Login.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

function Login(props) {
  const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
  const [loading, setLoading] = useState(false);
  const login_id = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

 

  const handleLogin = () => {
    console.log("사용자 ID :", login_id.value);
    console.log("사용자 password :", password.value);
    setError(null);
    setLoading(true);
    axios.post('http://user.primarykey.shop:3000/auth/user', { login_id: login_id.value, password: password.value }).then(response => {
      setLoading(false);      
      if(response.status==200){
        const token = response.data.jwt;
        const user = login_id.value;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUserSession(axios.defaults.headers.common['Authorization'], login_id.value);
        props.history.push("/");       
      }   
      else {
        setError("아이디/비밀번호가 틀렸습니다.");
      }
    }).catch(error => {
      setLoading(false);
      if (error.response === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  };
  return(
    <div className="Login">
      <HeaderBlackVersion />
      <div className="login">
          <p className="login_title">로그인</p>
          <div className="login_box">
            <div className="member_chk">
              <a href=""><p className="member">회원 로그인</p></a>
              <a href=""><p className="notmember">회원 가입</p></a>
            </div>
            <form action="#">
              <label htmlFor="loginid" className="labelid">ID</label>
              <input type="text" id="loginid" {...login_id} autoComplete="new-password" />
              {/* <input type="text" id="loginid" onChange={this.idInputCheck} /> */}
              <label htmlFor="loginpw" className="labelpw">PASSWORD</label>
              <input type="password" {...password} id="loginpw" autoComplete="new-password" />
              {/* <input type="password" id="loginpw" onChange={this.pwInputCheck}/> */}
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
                <input type="submit" value="로그인" onClick={handleLogin}/>
              </div>
              
              <div className="sign">
                <p>아직 회원이 아니시라면?</p>
                <a href="/">회원가입</a>
              </div>
            </form>
          </div>
          
      </div>
      <FooterBlack />
    </div>
  );

}

export default Login;