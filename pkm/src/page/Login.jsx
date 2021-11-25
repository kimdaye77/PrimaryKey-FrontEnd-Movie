import React, { Component } from 'react';
import Home from './Home.jsx';
import axios from 'axios';

import '../css/reset.css';
import '../css/Login.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

class Login extends Component {
  constructor() {
    super();

    this.state={
      userName: "",
      idChecked:false,
      pwChecked:false,
      btnColor:"false",
    };
  }
  //메인 home
  goToMain = () => {
    this.setState({userName: this.userName});
    console.log(this.props);
    this.props.history.push("/");
  }

  //idcheck
  idInputCheck = (event) => {
    this.setState({userID: event.target.value});
    if (event.target.value.length>=5) {
      this.setState({idChecked: true}, () => this.btnChangeColor());

    }else{
      this.setState({idChecked:false}, () => this.btnChangeColor());
    }
  };
  //pwcheck
  pwInputCheck = (event) => {
    this.setState({userPW: event.target.value});
    if (event.target.value.length>=5) {
      this.setState({userName: event.target.value, pwChecked:true}, ()=>this.btnChangeColor());
    }
    else {
      this.setState({pwChecked:false}, () => this.btnChangeColor());
    }
  }

  btnChangeColor = () => {
    if(this.state.idChecked&&this.state.pwChecked) {
      this.setState({btnColor:"true"});
    }
    else {
      this.setState({btnColor:"false"});
    }
  }

  btnClick = () => {
    console.log("사용자 ID :", this.state.userID);
    console.log("사용자 password :", this.state.userPW);
    // if(res.data.userId === undefined){
    //   // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
    //   console.log('======================',this.data.msg)
    //   alert('입력하신 id 가 일치하지 않습니다.')
    // } else if(res.data.userId === null){
    //     // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
    //     console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
    //     alert('입력하신 비밀번호 가 일치하지 않습니다.')
    // } else if(this.data.userId === inputId) {
    //     // id, pw 모두 일치 userId = userId1, msg = undefined
    //     console.log('======================','로그인 성공')
    //     sessionStorage.setItem('user_id', inputId)
    // }
    // // 작업 완료 되면 페이지 이동(새로고침)
    this.goToMain();
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };
  render(){
    const {userName, idChecked, pwChecked,btnColor}= this.state;
    return(
      <div className="Login">
        <HeaderBlackVersion />
        <div className="login">
            <p className="login_title">로그인</p>
            <div className="login_box">
              <div className="member_chk">
                <a href="" onClick={this.handleClick}><p className="member">회원 로그인</p></a>
                <a href="" onClick={this.handleClick}><p className="notmember">비회원 로그인</p></a>
              </div>
              <form action="#">
                <label htmlFor="loginid" className="labelid">ID</label>
                <input type="text" id="loginid" onChange={this.idInputCheck} />
                <label htmlFor="loginpw" className="labelpw">PASSWORD</label>
                <input type="password" id="loginpw" onChange={this.pwInputCheck}/>
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
                  <input type="submit" className={this.state.btnColor} value="로그인" onClick={this.btnClick}/>
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
}

export default Login;