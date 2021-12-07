import React, { Component } from 'react';
import TheaterApi from '../component/TheaterApi';
import axios from "axios";
import '../css/reset.css';
import '../css/Theater.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import PropTypes from "prop-types";
import { getToken } from '../utils/Common';
import {NavLink} from "react-router-dom";

class Theater extends Component {
  constructor() {

    
    super();

    this.state = {
      isLoading: true,
      theaterList: [],
      schedule:[],
    };
    
  }

  getTheaters = async()=> {
    const token = getToken();

    const res= await axios.get("http://user.primarykey.shop:3000/theater?theaterAddress=서울", {
      headers: { Authorization: axios.defaults.headers.common['Authorization']}}
      // headers: {
      //   Authorization: `Bearer ${token}`}}
      );
    const theaterList = res.data;
    console.log(res);
    const r = await axios.get("http://user.primarykey.shop:3000/movieSchedule?theaterID=1&date=2021-11-10",{ 
      headers: { Authorization: axios.defaults.headers.common['Authorization']}}
      // headers: {
      //   Authorization: `Bearer ${token}`}}
      );
    const schedule = r.data;
    console.log(r);
    this.setState({isLoading:false, theaterList, schedule});
    console.log(theaterList);
    console.log(schedule);
  }
  

  componentDidMount()  {
  //영화데이터로딩
      this.getTheaters();
  }
  

  componentDidMount()  {
  //영화데이터로딩
      this.getTheaters();
  }

  handleClick = (e, clickedTheater) => {
    e.preventDefault();
    this.setState({clickedTheater:clickedTheater});
    this.handleClick = this.handleClick.bind(this);
    console.log(clickedTheater);
  };
  
  render(){
    const {isLoading, theaterList,schedule}= this.state;
    let theater_name = "";
    return(
      <div className="Theater">
        <HeaderBlackVersion />
        <p className="theater_title">전체극장</p>
        <div className="theater">
        {isLoading? (
            <div className="loader">
                <span className="loader_txt">Loading...</span>
            </div>
        ):(
            <div className="theater_content">
                <div className="title"></div>
                <div className="theaterbox">
                  <div className="theater_local">
                    <ul className="locallist">
                      <li className="clickedlocal">서울</li>
                      <li>경기/인천</li>
                      <li>충청/대전</li>
                      <li>전라/광주</li>
                      <li>경북/대구</li>
                      <li>경남/부산/울산</li>
                      <li>강원</li>
                      <li>제주</li>
                    </ul>
                  </div>
                  <div className="theater_list">           
                    {theaterList.map((theater)  => (
                        theater_name = theater.theater_name,
                        <button className = "lis" onClick={(e, clickedTheater) => (theater_name = theater.theater_name, clickedTheater=theater_name,  this.handleClick(e, clickedTheater), this.handleClick = this.handleClick.bind(this))}>
                          {theater_name} <br></br></button>
                    ))
                      }
                        
                    
                      
                  </div>  
                  <div className="gangnam">
                    <p id="cinemaone">CINEMA1 강남점</p>
                    <img id="gangnamimg" src="https://img.cgv.co.kr/Theater/Theater/2014/1211/CGVgangnam.jpg" alt="" />
                      <p>서울특별시 강남구 역삼동 814-6 스타플렉스</p>
                      <p>서울특별시 강남구 강남대로 438 (역삼동)</p>
                      <p>1544-1122</p>
                      <p>6관 / 874석</p>
                      <div className="schedule">
                        <p className="theater_title">상영시간표</p>
                     {schedule.map((sch)  => (
                                 <button className="sch">
                                
                                <div id="info">
                                  <div>영화 | {sch.title}</div>
                                  <div>러닝타임 | {sch.running_time}</div>
                                  <div>장르 | {sch.genre}</div>
                                  <div>개봉일 | {sch.open_date}</div>
                                  <div>상영관 | {sch.hall_name}</div>
                                  <div>영화 타입 | {sch.type}</div>
                                  <div>시작시간 | {sch.start_time}</div>
                                  <div>종료시간 | {sch.end_time}</div>
                              </div>
                              <NavLink to = "/Seat"><p className="rsvbtn">예매하기</p></NavLink>
                              {sch.title=="이터널스"?
                              (
                               <div id="iternals">
                                  <img src="https://w.namu.la/s/4faa09f80d3b1c37c4d4bd264c38760b59249fed5d35ef4995cc9f51ede7492ba37db64bee6706934f4dc22a946473dac3ad85f13f592d29b9ae46c9736bc6c1b1f8b7ecdeef9e74cfd55665a54e37ca75394433d91b43ada3df964508b35a189a8d29344500716ddc2de402888c11a4" alt="" />
                                </div>)
                                :
                                   (<div id="ddun">
                                   <img src="https://w.namu.la/s/40e60eb71778c1cd841d54b29fc99b062b510eb66a0e2c7a2451ff3b75cf7cc1894acfe03a26a7b38e2decde95c9f5e1a51fc4ad4dff14e07da0124b571c10f877f6d037f076b3e93fd7120e497c14af1be1dc44516e39d671620ff17c77872c4e7c1b914fcffe79ab1d17baed7fb310" alt="" />
                                </div>)
                                }
                              </button> 
                      ))
                    }
                                
                              
                      
                           
                          
              
                      </div>
                  </div>      
                </div>
                          
            </div>
                )}
        </div>
        <FooterBlack />
      </div>
    );
  }
}

export default Theater;