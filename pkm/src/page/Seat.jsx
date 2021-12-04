import '../css/reset.css';
import '../css/Seat.css';
import React, { Component} from 'react';
import axios from "axios";
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

function Seat() {
    let selectedSeats = new Array();
    let selectedSeatsMap = [];
    const seatWrapper = [];
    let clicked = "";
    const arr = [];
    let restSeats = [];

    function getInfo() {

        const res = axios.get("http://user.primarykey.shop:3000/seats/2", {
            headers: { Authorization: axios.defaults.headers.common['Authorization']}}
          );
          restSeats=res;
          console.log(res);
      }

    function checkClicked() {for (let i = 0; i < 7; i++) {
        seatWrapper.push(i);
        for (let j = 1; j < 13; j++) {
            const input = document.createElement('input');
            input.type = "button";
            input.name = "seats"
            input.classList = "seat";
            //3중포문을 사용하지 않기위해 
            mapping(input, i, j);
            arr.push(input);
            input.addEventListener('click', function(e) {
                console.log(e.target.value);
                //중복방지 함수
                selectedSeats = selectedSeats.filter((element, index) => selectedSeats.indexOf(element) != index);

                //click class가 존재할때(제거해주는 toggle)
                if (input.classList.contains("clicked")) {
                    input.classList.remove("clicked");
                    clicked = document.querySelectorAll(".clicked");
                    selectedSeats.splice(selectedSeats.indexOf(e.target.value), 1);
                    clicked.forEach((data) => {
                        selectedSeats.push(data.value);
                    });
                    //click class가 존재하지 않을때 (추가해주는 toggle)
                } else {
                    input.classList.add("clicked");
                    clicked = document.querySelectorAll(".clicked");
                    clicked.forEach((data) => {
                        selectedSeats.push(data.value);
                    })
                }
                console.log(selectedSeats);
            })
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

    return (
        
        <div className="Seat">
            {getInfo()}
            {checkClicked()}
            <HeaderBlackVersion />
            <div className="seatcontent">
            <p className="seat_title">좌석 예매</p>
            <div className="seatwrap">
                <div className="screen">스크린
                </div>
                <div className="seatbox">
                        {arr.map((result)  => (
                            <button onClick = {checkClicked} className="seat">
                                {result.value}
                            </button> 
                        ))
                        }   
                    </div>
            </div>
            <div>
                <p>선택한 좌석</p>
                <div>
                    {selectedSeats}
                </div>
            </div>
                  
            </div>
        </div>
        
    );
}


export default Seat;