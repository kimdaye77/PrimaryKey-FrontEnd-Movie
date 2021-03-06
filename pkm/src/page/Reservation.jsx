import React, {Component} from 'react';
import '../css/reset.css';
import '../css/Reservation.css';
import TheaterApi from '../component/TheaterApi';
import axios from "axios";
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import { getToken } from '../utils/Common.js';

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
      clickedSchedule:null,
      schedule:[],
      step:"default",
    };
    
  }

  getTheaters = async()=> {
    const token = getToken();

    const res= await axios.get("http://user.primarykey.shop:3000/theater?theaterAddress=서울", {
      headers: { Authorization: sessionStorage.getItem('token')}}
      // headers: {
      //   Authorization: `Bearer ${token}`}}
      );
    const theaterList = res.data;
    console.log(res);
    const r = await axios.get("http://user.primarykey.shop:3000/movieSchedule?theaterID=1&date=2021-12-10",{ 
      headers: { Authorization: sessionStorage.getItem('token')}}
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

  addEventListener = () => {
  };

  dayClickEvent = (clickedDate) => {
    this.setState({clickedDate:clickedDate});
    if(clickedDate=="10"){
      this.setState({clickedDate:"ten"});
    }
    console.log(this.state.clickedDate);
    this.addEventListener(clickedDate);
    this.activeStep();
  };

  localClickEvent = (clickedLocal) => {
    this.setState({clickedLocal:clickedLocal});
    console.log(this.state.clickedLocal);
    this.addEventListener(clickedLocal);
    this.activeStep();
  };

  movieClickEvent = (clickedMovie) => {
    this.setState({clickedMovie:clickedMovie});
    console.log(this.state.clickedMovie);
    this.addEventListener(clickedMovie);
    this.activeStep();
  };

  scheduleClickEvent = (clickedSchedule) => {
    this.setState({clickedSchedule:clickedSchedule});
    console.log(this.state.clickedSchedule);
    this.addEventListener(clickedSchedule);
    this.activeStep();
  };

  activeStep = () => {
    if (this.state.clickedSchedule!=null){
      this.setState({step:"activebtn"});
    }
    console.log(this.state.step);
  }

  changeStep = () => {
    if(this.state.step=="activebtn") {
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
    const {theaterList, schedule, step, clickedLocal, clickedMovie, clickedTheater, clickedDate, clickedSchedule}= this.state;
    

    let theater_name = "";
    return(
      <div className="Reservation">
        <HeaderBlackVersion />
        <div className="rsv_content">
          <p className="rsv_title">티켓 예매</p>
          <button className="stepbutton" id={step} onClick={()=>this.changeStep()}>좌석 선택</button>
          <div className="reserve-container">
        <div className="movie-part">
            <div className="reserve-title">영화</div>
            <div className="sort-wrapper">
                <div className="sort-rate sort-selected">예매율순</div>
                <div className="sort-korean">가나다순</div>
            </div>
            <div className="movie-list">
              <span>영화 목록</span>
              {this.state.clickedTheater=="강남점"&&this.state.clickedDate!=0?(
                <div className="movie" >
                {schedule.map((sch)  => (
                  <div id={clickedMovie}>
                    {sch.title!=tmp?
                      (<button onClick = {()=>(this.state.step="movie",this.state.clickedMovie="이터널스", this.movieClickEvent(this.state.clickedMovie))}>
                        {tmp = sch.title}
                      </button>):
                      (<></>)}
                  </div>
                  ))
                    }
             </div>
              ):(
                <></>
              )}
          </div>
        </div>
        <div className="theater-part">
            <div className="reserve-title">극장</div>
                          
            <div className="reservedlocallist">
               <button id={clickedLocal} onClick = {()=>(this.state.step="local", this.state.clickedLocal="서울", this.localClickEvent(this.state.clickedLocal))}>서울</button>
                {this.state.clickedLocal=="서울"?(
                  <>
                  <div className="theater_l" >
                  {theaterList.map((theater)  => (
                      theater_name = theater.theater_name,
                      <button id={clickedTheater} className = "lis" onClick={(e, clickedTheater) => (this.state.step="theater", theater_name = theater.theater_name, clickedTheater=theater_name,this.handleClick(e, clickedTheater), this.handleClick = this.handleClick.bind(this))}>
                        {theater_name} <br></br></button>
                   ))
                     }
             </div>
             </>)
                :
                <>
                </>}
                
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
                <>
                <button id={clickedDate} className={spanday} onClick={() => (spandate = result.props.id,
                  spanday = result.props.className, this.state.step="date", this.state.clickedDate=spandate, this.dayClickEvent(this.state.clickedDate))}>
                  {spandate}
                </button>
                </>
              ))
              }          
            </div>
           
        </div>
        <div className="time-part">
            <div className="reserve-title">시간</div>
            {this.state.clickedMovie!=null?(
              <div id = {step} className="schedule" >
              {schedule.map((sch)  => (
                <button className="timesch" id={clickedSchedule} onClick = {()=>(this.state.step="schedule", this.state.clickedSchedule="first", this.scheduleClickEvent(this.state.clickedSchedule))}>
                  
                  
                  {sch.title=="이터널스"?
                  (<>
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
                  <div id="eternals">
                    <img src="https://w.namu.la/s/18aa2898e80a4c2d30d47ff82117fe009daf6c0e93d768f3eb80d204edbb734d0488f9c2fd0af2f4ed6fcc39883bc719ee07cbce83618dbe95997f700e2821555daa5b2a81763d85018fb32af84bf8c98e194e76244806fb532461e78e8f02bb8317a2d7b68049d46c9887e3f18bc373" alt="" />
                  </div>
                  </>):<></>
                  //듄
                  // (<div id="ddun">
                  //    <img src="https://w.namu.la/s/40e60eb71778c1cd841d54b29fc99b062b510eb66a0e2c7a2451ff3b75cf7cc1894acfe03a26a7b38e2decde95c9f5e1a51fc4ad4dff14e07da0124b571c10f877f6d037f076b3e93fd7120e497c14af1be1dc44516e39d671620ff17c77872c4e7c1b914fcffe79ab1d17baed7fb310" alt="" />
                  // </div>)
                  }
              </button>
         
               ))
                 }
         </div>
            ):(
              <></>
            )}
        </div>
    </div>
    
          
        </div>
        <FooterBlack />
      </div>
    );
  }
}

export default Reservation;