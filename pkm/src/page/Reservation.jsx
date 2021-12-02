import React, { Component} from 'react';
import '../css/reset.css';
import '../css/Reservation.css';
import ticket from '../asset/ticket.png';
import TheaterApi from '../component/TheaterApi';
import axios from "axios";
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import { getToken } from '../utils/Common';

class Reservation extends Component {
  constructor() {

    
    super();

    const res = null;

    this.state = {
      clickedMovie:null,
      clickedDate : 0,
      color:"red",
      clickedLocal : null,
      isLoading: true,
      theaterList: [],
      clickedTheater :null,
      schedule:[],
      step:"default",
    };
    
  }

  getTheaters = async()=> {
    const accessToken = getToken();
    
    const res= await axios.get("http://user.primarykey.shop:3000/theater?theaterAddress=서울", {
      headers: { Authorization: axios.defaults.headers.common['Authorization']}}
    );
    const theaterList = res.data;
    console.log(res);
    const r = await axios.get("http://user.primarykey.shop:3000/movieSchedule?theaterID=1&date=2021-11-10",{ 
      headers: { Authorization: axios.defaults.headers.common['Authorization']}}
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

  handleClick = (e, clickedTheater) => {
    e.preventDefault();
    this.setState({clickedTheater:clickedTheater});
    this.handleClick = this.handleClick.bind(this);
    this.activeStep();
    console.log(clickedTheater);
  };


  

  writeDay = () => {
    let {clickedDate} = this.state.clickedDate;
    const result = [];
    const date = new Date();
    let day = 0;
        console.log(date.getFullYear());
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        let reserveDate = document.querySelector(".reserve-date");
            const weekOfDay = ["일", "월", "화", "수", "목", "금", "토"]
            const year = date.getFullYear();
            const month = date.getMonth();
            var i = date.getDate();
            for (i = date.getDate(); i <= lastDay.getDate(); i++) {

                let week = "";
                day = i;

                //weekOfDay[new Date(2021-12-날짜)]
                const dayOfWeek = weekOfDay[new Date(year + "-" + month + "-" + i).getDay()];

                //요일 넣기
                if (dayOfWeek === "토") {
                  week = "saturday";
                } else if (dayOfWeek === "일") {
                  week = "sunday";
                }             
                result.push(<div className={week} id={i}>{day}</div>);
                
            }
            return result
  };

  addEventListener = (clickedDate) => {
  };

  dayClickEvent = (clickedDate) => {
    console.log(this.state.clickedDate);
    this.addEventListener(clickedDate);
    this.activeStep();
  };

  localClickEvent = (clickedLocal) => {
    console.log(this.state.clickedLocal);
    this.addEventListener(clickedLocal);
    this.activeStep();
  };

  movieClickEvent = (clickedMovie) => {
    console.log(this.state.clickedMovie);
    this.addEventListener(clickedMovie);
    this.activeStep();
  };

  activeStep = () => {
    if(this.state.clickedDate!=0 && this.state.clickedLocal!=null&& this.state.clickedTheater!=null && this.state.clickedMovie!=null) {
      this.setState({step:"activebtn"});
    }
    console.log(this.state.step);
  }

  changeStep = () => {
    if(this.state.step!="default") {
      this.props.history.push("/Seat")
    }
    else {
      alert("모든 단계를 완료해야 합니다.");
    }
  }


  render(){
    
    let spandate = 0;
    let spanday = 0;
    let tmp = "";
    const {theaterList, schedule, step, clickedLocal, clickedMovie, clickedTheater, clickedDate}= this.state;
    

    let theater_name = "";
    return(
      <div className="Reservation">
        <HeaderBlackVersion />
        <div className="rsv_content">
          <button id={step} onClick={()=>this.changeStep()}>좌석 선택</button>
          <p className="rsv_title">티켓 예매<img src={ticket} className="ticket_icon" alt="ticket" /></p>
          <div className="reserve-container">
        <div className="movie-part">
            <div className="reserve-title">영화</div>
            <div className="sort-wrapper">
                <div className="sort-rate sort-selected">예매율순</div>
                <div className="sort-korean">가나다순</div>
            </div>
            <div className="movie-list">
              <span>영화 목록</span>
              <div className="movie" >
                {schedule.map((sch)  => (
                  <div>
                    {sch.title!=tmp?
                      (<button id={clickedMovie} onClick = {()=>(this.setState({step:"movie"}),this.setState({clickedMovie:"이터널스"}), this.movieClickEvent(this.state.clickedMovie))}>
                        {tmp = sch.title}
                      </button>):
                      (<></>)}
                  </div>
                  ))
                    }
             </div>
          </div>
        </div>
        <div className="theater-part">
            <div className="reserve-title">극장</div>
                          
            <div className="reservedlocallist">
               <button id={clickedLocal} onClick = {()=>(this.setState({step:"local"}), this.setState({clickedLocal:"서울"}), this.localClickEvent(this.state.clickedLocal))}>서울</button>
                {console.log(this.state.clickedLocal)}
                {this.state.clickedLocal!=null?(
                  <>
                  <div className="theater_l" >
                  {theaterList.map((theater)  => (
                      theater_name = theater.theater_name,
                      <button id={clickedTheater} className = "lis" onClick={(e, clickedTheater) => (theater_name = theater.theater_name, clickedTheater=theater_name,this.setState({step:"theater"}),   this.handleClick(e, clickedTheater), this.handleClick = this.handleClick.bind(this))}>
                        {theater_name} <br></br></button>
                   ))
                     }
             </div>
             </>)
                :
                <></>}
                
                <button onClick = {()=>(this.state.clickedLocal="경기/인천", this.localClickEvent(this.state.clickedLocal))}>경기/인천</button>
                <button onClick = {()=>(this.state.clickedLocal="충청/대전", this.localClickEvent(this.state.clickedLocal))}>충청/대전</button>
                <button onClick = {()=>(this.state.clickedLocal="전라/광주", this.localClickEvent(this.state.clickedLocal))}>전라/광주</button>
                <button onClick = {()=>(this.state.clickedLocal="경북/대구", this.localClickEvent(this.state.clickedLocal))}>경북/대구</button>
                <button onClick = {()=>(this.state.clickedLocal="경남/부산/울산", this.localClickEvent(this.state.clickedLocal))}>경남/부산/울산</button>
                <button onClick = {()=>(this.state.clickedLocal="강원", this.localClickEvent(this.state.clickedLocal))}>강원</button>
                <button onClick = {()=>(this.state.clickedLocal="제주", this.localClickEvent(this.state.clickedLocal))}>제주</button>
            </div>
          </div>
        <div className="day-part">
            <div className="reserve-title">날짜
            </div>
            <div className="reserve-date" >
            
              {this.writeDay().map((result)  => (
                        spandate = result.props.id,
                        spanday = result.props.className,
                        <button className={spanday} onClick={() => (spandate = result.props.id,
                          spanday = result.props.className, this.setState({step:"date"}), this.state.clickedDate=spandate, this.dayClickEvent(this.state.clickedDate))}>
                          {spandate}
                        </button>
              ))
              }          
            </div>
           
        </div>
        <div className="time-part">
            <div className="reserve-title">시간</div>
            <div id = {step} className="schedule" >
                  {schedule.map((sch)  => (
                    <button>
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
                      
                      {sch.title=="이터널스"?
                      (<div id="iternals">
                        <img src="https://w.namu.la/s/4faa09f80d3b1c37c4d4bd264c38760b59249fed5d35ef4995cc9f51ede7492ba37db64bee6706934f4dc22a946473dac3ad85f13f592d29b9ae46c9736bc6c1b1f8b7ecdeef9e74cfd55665a54e37ca75394433d91b43ada3df964508b35a189a8d29344500716ddc2de402888c11a4" alt="" />
                      </div>):
                      //듄
                      (<div id="ddun">
                         <img src="https://w.namu.la/s/40e60eb71778c1cd841d54b29fc99b062b510eb66a0e2c7a2451ff3b75cf7cc1894acfe03a26a7b38e2decde95c9f5e1a51fc4ad4dff14e07da0124b571c10f877f6d037f076b3e93fd7120e497c14af1be1dc44516e39d671620ff17c77872c4e7c1b914fcffe79ab1d17baed7fb310" alt="" />
                      </div>)}
                  </button>
                    
                    
                      
            
                   ))
                     }
             </div>
        </div>
    </div>
    
          
        </div>
        <FooterBlack />
      </div>
    );
  }
}

export default Reservation;