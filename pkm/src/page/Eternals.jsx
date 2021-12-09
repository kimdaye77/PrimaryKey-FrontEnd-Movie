import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Eternals.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import axios from 'axios';
import { getToken } from '../utils/Common';
import twelve from '../asset/12.png';
import {NavLink} from "react-router-dom";

class Eternals extends Component {
    constructor() {
        super();
        this.state = {
          movieInfo :[],
          searchword:"",
          schedule:[],
        };    
      }
    

    setSearch = (e) => {
        this.setState({searchword:e.target.value});
        console.log(e.target.value);
    }

    drawsearch = () => {
        const word = this.state.searchword;
        if(word=="Eternals"||word=="이터널스"){
            document.location.href = '/Eternals';
        }
    }
      getMovie = async()=> {
        const token = getToken();
       
        const res= await axios.get("http://user.primarykey.shop:3000/movies/1", {
            headers: { Authorization: sessionStorage.getItem('token')}}
          );
        this.setState({movieInfo:res.data.movieInfo});
        console.log(res);
        const r = await axios.get("http://user.primarykey.shop:3000/movieSchedule?theaterID=1&date=2021-12-10",{ 
            headers: { Authorization: sessionStorage.getItem('token')}}
            // headers: {
            //   Authorization: `Bearer ${token}`}}
            );
          const schedule = r.data;
          console.log(r);
          this.setState({schedule});
          console.log(schedule);
      }
      
    
      componentDidMount()  {
      //영화데이터로딩
          this.getMovie();
      }


  render(){
      const {movieInfo, searchword, schedule} = this.state;
    return(
      <div className="Eternals">
        <HeaderBlackVersion />
        <div className="Eternals_cont">
            <div className="movie_title">영화 정보</div>
            <div className="mv_search">
                <input value={searchword} type="text" placeholder="검색어를 입력하세요 (예 : 영화명/장르/감독)" onChange={(e)=>this.setSearch(e)}  />
                <button onClick={()=>this.drawsearch()} id="searchbtn">검색</button>
            </div>
            
            </div>
            <div className="cont_wrap">
                {movieInfo.map((mv)  => (
                        <div className="about_e">
                            <div className="float_box">
                                <div className="lft_e" id="poster_e"><img src={twelve} alt="" /><img src="https://img.megabox.co.kr/SharedImg/2021/10/27/FhsmDr5hfwwoaHQ16TVMygsYjh7dDRhD_420.jpg" alt="" /></div>
                                <div className="rht">
                                    <h1>이터널스</h1>
                                    <h2>Eternals</h2>
                                    <p><span>러닝타임</span>{mv.running_time}분</p>
                                    <p><span>개봉일</span>{mv.open_date}</p>
                                    <p><span>장르</span>{mv.genre}</p>
                                    <p><span>출연진[감독/배우들]</span>
                                    <br/>
                                    <br/>{mv.cast}</p>
                                    <p><span>개봉국가</span>{mv.country_name}</p>
                                    <p>
                                    <span id="btn_e"><a href=""> ♡ 1.5k</a></span>  
                                    <span><NavLink to ="/Reservation" id="btn_e">예매하기</NavLink>   </span>
                                    </p>
                                    </div>   
                                     
                                                           
                            </div>
                            
                        </div>
                        
                        ))
                }
            </div>
            {/* <div>
                            <p className="theater_title">상영시간표</p>
                        {schedule.map((sch)  => (
                            <>{sch.title=="이터널스"?(<>
                            <button className="sch_wrap_box">
                                        <div id="info_sch">
                                            <div className="bold">영화 정보</div>
                                            <div>영화 | {sch.title}</div>
                                            <div>러닝타임 | {sch.running_time}</div>
                                            <div>장르 | {sch.genre}</div>
                                            <div>개봉일 | {sch.open_date}</div>
                                            <br/>
                                            <div className="bold">상영 정보</div>
                                            <div>상영관 | {sch.hall_name}</div>
                                            <div>영화 타입 | {sch.type}</div>
                                            <div>시작시간 | {sch.start_time}</div>
                                            <div>종료시간 | {sch.end_time}</div>
                                        </div>
                              <NavLink to = "/Seat"><p className="/Reservation">예매하기</p></NavLink>
                              </button> 
                              </>):(<></>)}
                            </>
                                    
                      ))
                    }
                      </div> */}
            
        
        <FooterBlack />
      </div>
    );
  }
}

export default Eternals;