import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Reservation.css';
import ticket from '../asset/ticket.png';
import calendar from '../asset/calendar.png';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

class Reservation extends Component {
  render(){
    return(
      <div className="Reservation">
        <HeaderBlackVersion />
        <div className="rsv_content">
          <p className="rsv_title">티켓 예매<img src={ticket} className="ticket_icon" alt="ticket" /></p>
          <div className = "box_wrap">
            <div className="calendar_wrap">
              <div className="calendar">
                <p>2021.11</p>
                <img src={calendar} className="calendar_icon" alt="calendar"></img>
              </div>
            </div>
            <div className="choice_wrap">
              <div className="progress">
                <table>
                  <tr>
                    <td>STEP 1<br/>상영 시간</td>
                  </tr>
                  <tr>
                    <td>STEP 2<br/>인원/좌석</td>
                  </tr>
                  <tr>
                    <td>STEP 3<br/> 결제 방법</td>
                  </tr>
                  <tr>
                    <td>STEP 4<br/>결제 완료</td>
                  </tr>
                </table>
              </div>
              <div className="box">
                <table>
                    <tr>
                      <th colSpan="2">영화관 선택</th>
                      <th>영화 선택</th>
                      <th>날짜 선택</th>
                    </tr>
                    <tr>
                      <th>전체</th>
                      <th>특별관</th>
                      <td rowSpan="2">
                        <div className="movie">
                          영화들
                        </div>
                      </td>
                      <td rowSpan="2">
                        <div className="date">
                          <div className="number">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>1</span>
                          </div>
                          날짜
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="local">
                          지역들
                        </div>
                      </td>
                      <td>
                        <div className="theater">
                          극장들
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td height = "400px" colSpan="10">
                        <div className="check">
                          <p>선택한 항목</p>
                          <div className="checklist">
                          </div>
                        </div>
                      </td>              
                    </tr>
                  </table>
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