import React, { Component} from 'react';
import '../css/reset.css';
import '../css/Mypage.css';
import axios from "axios";
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import { getToken } from '../utils/Common.js';

class Mypage extends Component {
    constructor() {
        super();
    
        this.state = {
          userInfo : [],
          userReservationList:[],
        };
      }
    
      getInfo = async()=> {
        const res= await axios.get("http://user.primarykey.shop:3000/users/1", {
          headers: { Authorization: axios.defaults.headers.common['Authorization']}}
          );
        console.log(res.data.userInfo);
        this.setState({userInfo:res.data.userInfo});

        const re= await axios.get("http://user.primarykey.shop:3000/users/1/reservations", {
            headers: { Authorization: axios.defaults.headers.common['Authorization']}}
            );
          console.log(re.data.userReservationList);
          this.setState({userReservationList:re.data.userReservationList});

      }
      
    
      componentDidMount()  {
      //영화데이터로딩
          this.getInfo();
      }    
    render(){
        const {userInfo, userReservationList} = this.state;
      return(
        <div className="Mypage">
          <HeaderBlackVersion />
          <p className="mypage_title">마이페이지</p>
          <div className="mypage-container">
            <div className="mypage_content">
                {userInfo.map((user) => (
                    <div className="info">
                        <div className="membership">
                            <p className="text1"><span id="name">{user.name}</span></p> 
                            <p className="text1">현재 회원님의 등급은 <span id="basic">BASIC</span> 입니다.</p>
                            <div id="bar">
                                <p className="guage">64%</p>
                            </div>
                        </div>
                        <div className="user">
                            <div><span className="txt2">이름</span> {user.name}</div>
                            <div><span className="txt2">아이디</span>{user.login_id}</div>
                            <div><span className="txt2">닉네임</span>{user.nickname}</div>
                            <div><span className="txt2">전화번호</span>{user.phone_number}</div>
                            <div><span className="txt2">이메일</span>{user.email}</div>
                            <div><span className="txt2">생년월일</span>{user.birth}</div>
                            <div><span className="txt2">포인트</span>{user.point} points</div>
                            <div><span className="txt2">멤버십</span>{user.membership_name}</div>
                        
                        </div>

                        <p id="change"><a href="">회원정보 수정</a></p>
                        
                    
                    </div>
                ))}
                
            </div>
          </div>
          <p className="mypage_title">예매 내역</p>
          <div className="mypage-container">
            <div className="res_content">
                {userReservationList.map((m) => (
                    <>
                    <div className="reserve_info">
                        <div className="cont">
                            <div><span className="txt2">제목</span> {m.title}</div>
                            <div><span className="txt2">상영시간</span> {m.start_time}</div>
                            <div><span className="txt2">종료시간</span> {m.end_time}</div>
                            <div><span className="txt2">상영극장</span> {m.theater_name}</div>
                            <div><span className="txt2">상영관</span> {m.hall_name}</div>
                            <div><span className="txt2">예매날짜</span> {m.reservedDate}</div>
                            <div><span className="txt2">좌석개수</span> {m.numberOfSeats}</div>
                            <div><span className="txt2">좌석좌표</span> {m.seat_row_col}</div>
                            <div><span className="txt2">주차권</span> {m.parking_barcode}</div>
                        </div>
                        
                        <div id="img">{m.title=="이터널스"?(<img src="https://w.namu.la/s/18aa2898e80a4c2d30d47ff82117fe009daf6c0e93d768f3eb80d204edbb734d0488f9c2fd0af2f4ed6fcc39883bc719ee07cbce83618dbe95997f700e2821555daa5b2a81763d85018fb32af84bf8c98e194e76244806fb532461e78e8f02bb8317a2d7b68049d46c9887e3f18bc373" alt="" />):
                    (<img src="https://w.namu.la/s/90c275e4291b76dc8d5c687029a4089097c293900a13e22d8d409aa79b29fd8bdd97885b56f87a7b889e4466e3dfe23182de582f04df86698b413c899fdcda1f9885aa726b857f4ae3f2e221f2a5cdd36ff1eb95241456b35c1d584dae5ad1f351493dbfd00461dc0e34a8e812aefd13" alt="" />)}</div>
                    </div>       
                    </>  
                ))}
                
            </div>
          </div>
          
          
          <FooterBlack />
        </div>
      );
    }
  }
  
export default Mypage;
