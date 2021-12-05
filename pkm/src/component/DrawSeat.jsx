import '../css/reset.css';
import '../css/DrawSeat.css';
import React, { Component, useState} from 'react';
import axios from "axios";
import PropTypes from "prop-types";
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import {NavLink} from "react-router-dom";

function DrawSeat(value) {
    const seatWrapper = [];
    const arr = [];
    const [seats, selectedSeats] = useState([]);
    const [btn,setbtn] = useState("false");
    {for (let i = 0; i < 7; i++) {
        seatWrapper.push(i);
        for (let j = 1; j < 13; j++) {
            const input = document.createElement('input');
            input.type = "button";
            input.name = "seats"
            input.classList = "seat";
            //3중포문을 사용하지 않기위해 
            mapping(input, i, j);
            // arr.push(input);
            const a = ["A7", "A8", "A9", "A10", "A11", "A12", "B1", "B2", "B3", "B4", "B5", "C9", "C10", "C11", "C12", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "E1", "E2", "E3", "E4"]
            if(a.includes(input.value)){
                arr.push(<button onClick={()=>{clickedSeat(input.value)}} className="canreserve">{input.value}</button>);
                console.log("잔여 좌석", input.value);
            }
            else{
                arr.push(<p className="already">{input.value}</p>);
                console.log("예매 불가", input.value);
            }
            
        }
    }
}

    function mapping(input, i, j) {
        if (i === 0) {
            input.value = "A" + j;
        } else if (i === 1) {
            input.value = "B" + j;
        } else if (i === 2) {
            input.value = "C" + j;
        } else if (i === 3) {
            input.value = "D" + j;
        } else if (i === 4) {
            input.value = "E" + j;
        } else if (i === 5) {
            input.value = "F" + j;
        } else if (i === 6) {
            input.value = "G" + j;
        }
    }
    function clickedSeat(seat) {
        //잔여 seat_id 7 8 9 10 11 12 13 14 15 16 17
        //21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40
        //A7 A8 A9 A10 A11 A12 B1 B2 B3 B4 B5
        //C9 C10 C11 C12 D1 D2 D3 D4 D5 D6 D7 D8 D9 D10 D11 D12 E1 E2 E3 E4
        const a = ["A7", "A8", "A9", "A10", "A11", "A12", "B1", "B2", "B3", "B4", "B5", "C9", "C10", "C11", "C12", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "E1", "E2", "E3", "E4"]
        selectedSeats(seats => [...seats, seat]);
        console.log(seats)
        console.log("clicked");
        setbtn("true");
    }

    return (
        <>
            {arr.map((result)  => (
                <div className="seat">
                    {result}
                </div> 
            ))
            } 
            <div className = "selectbox">
                <p>선택한 좌석</p>
                <div className="selected">
                    {seats.map((result)  => (
                        <div className="selectedlist">
                            {result}
                        </div> 
            ))
            } 
                </div>
            </div>
            <div>
                <nav>
                    <ul className ="st">
                        <li className="prev"><NavLink to="/Reservation">이전</NavLink></li>
                        <li className="next" id={btn}><NavLink to="/Pay">다음(결제)</NavLink></li>
                    </ul>
                    
                </nav>
            </div>
        </>
    );
}

export default DrawSeat;