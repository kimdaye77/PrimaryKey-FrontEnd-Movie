import '../css/reset.css';
import '../css/Seat.css';
import React, { Component, useState} from 'react';
import axios from "axios";
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import DrawSeat from '../component/DrawSeat.jsx';
import FooterBlack from '../component/FooterBlack';

class Seat extends Component {
    constructor() {
        super();
        this.state = {
          restSeats:[],
        };
      }

    getInfo =async() => {
        const res =await axios.get("http://user.primarykey.shop:3000/seats/2", {
            headers: { Authorization: axios.defaults.headers.common['Authorization']}}
          );
          console.log(res.data.restSeats);
          this.setState({restSeats:res.data.restSeats});
      }

      componentDidMount()  {
        //영화데이터로딩
            this.getInfo();            
        }  
        

    render(){
        const {restSeats} = this.state;
        return(
          <div className="Reservation">
            <HeaderBlackVersion />
            
            <div className="seatcontent">
            <p className="seat_title">좌석 예매</p>
            <div className="seatwrap">
                <div className="screen">스크린
                </div>
                <div className="seatbox">
                    <DrawSeat/>
                </div>
            </div>
        </div>
            <FooterBlack />
          </div>
        );
 }
}


export default Seat;