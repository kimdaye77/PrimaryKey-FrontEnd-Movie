import '../css/reset.css';
import '../css/DrawSeat.css';
import React, { Component, useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import jQuery from 'jquery'; 
import { getUser } from '../utils/Common';

function DrawSeat() {

    const seatWrapper = [];
    const arr = [];
    const [seats, selectedSeats] = useState([]);
    const [cnt, count] = useState(0);
    const [price, total] = useState(0);
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
                // console.log("잔여 좌석", input.value);
            }
            else{
                arr.push(<p className="already">{input.value}</p>);
                // console.log("예매 불가", input.value);
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
        
        if(seats.includes(seat)) {onRemove(seat); count(cnt => cnt-1); total(price=>price-13000)}
        else{selectedSeats(seats => [...seats, seat]); count(cnt=>cnt+1); total(price=>price+13000)}
        console.log(seats);
        console.log("clicked");

        setbtn("true");
    }

    const onRemove = (id) => {

        selectedSeats(seats.filter((seat) => seat!== id));
        };
    
    function drawSeat(){
        return(<div className="seatbox">{arr.map((result)  => (
            <div className="seat">
                {result}
            </div> 
        ))
        } </div>)
    }

    function drawSelect(){
        return(<>
        <div className = "selectbox">
                <p>선택한 좌석 <span id="cnt">성인{cnt}명</span></p>
                <div className="selected">
                    {seats.map((result)  => (
                        <div className="selectedlist">
                            {result}
                        </div> 
            ))
            } 
                </div>
            </div></>)
    }

    var IMP = window.IMP; // 생략 가능
    IMP.init("imp63545287"); // 예: imp00000000
    
    function requestPay() {
        // IMP.request_pay(param, callback) 결제창 호출
        IMP.request_pay({ // param
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid : 'merchant_' + new Date().getTime(),
            name: "성인"+cnt+"명",
            amount: 100,
            buyer_email: "test1@test.com",
            buyer_name: getUser(),
            buyer_tel: "010-0000-0000",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181"
        }, function (rsp) { // callback
            if (rsp.success) { // 결제 성공 시: 결제 승인 또는 가상계좌 발급에 성공한 경우
              // jQuery로 HTTP 요청
              jQuery.ajax({
                  url: "https://www.myservice.com/payments/complete", // 예: https://www.myservice.com/payments/complete
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  data: {
                      imp_uid: rsp.imp_uid,
                      merchant_uid: rsp.merchant_uid
                  }
                }, document.location.href = '/Pay')
                  .done(function(data) { // 응답 처리
                    console.log(data);
                    switch(data.status) {
                      case("vbankIssued"):
                      document.location.href = '/Pay'
                        // 가상계좌 발급 시 로직
                        break;
                      case("success"):
                      document.location.href = '/Pay'
                        // 결제 성공 시 로직
                        break;
                        
                    }
                  })
                // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
                
                .always(function(data,status) {
                
                    document.location.href = '/Pay'
                
                });
                  
              } else {
              alert("결제에 실패하였습니다. 에러 내용: " +  rsp.error_msg);
            }
          });
    }
    return (
        <>
        <head>
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
        <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></script>

        </head>
        <body>
            {drawSeat()}
                {drawSelect()}
                <div>
                    <nav>
                        <div className ="st">
                            <button className="prev"><NavLink to="/Reservation">이전</NavLink></button>
                            <button onClick = {()=>requestPay()} className="next" id={btn}>
                                결제
                            </button>
                        </div>
                        
                    </nav>
            </div>
        </body>
            
        </>
    );
}

export default DrawSeat;