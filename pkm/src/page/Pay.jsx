import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Pay.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
function Pay(){
  
    return(
      <div className="Pay">
        <HeaderBlackVersion />
        <div className="pay_content">
          <p className="pay_title">결제 완료</p>
          <div className="paybox">
            <p className="msg">결제가 완료되었습니다.</p>
            <div className="pay_cont">
              <div className="pay_info">
              <p className="pay_title">결제 내역</p>
                  <div className="paycont">
                    <div className="lft">
                      <div className="con">
                        <div><span className="txt3">제목 | </span> 이터널스</div>
                        <div><span className="txt3">상영시간 | </span> 2021.12.10 14:00</div>
                        <div><span className="txt3">종료시간 | </span> 2021.12.10 16:10</div>
                        <div><span className="txt3">상영극장 | </span> 강남점</div>
                        <div><span className="txt3">상영관 | </span> 1관</div>
                        <div><span className="txt3">예매날짜 | </span> {(new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate())}</div>
                        <div><span className="txt3">좌석개수 | </span> 성인 2명</div>
                        <div><span className="txt3">좌석좌표 | </span> A7, A8 </div>
                      </div>
                      
                      <img src="https://w.namu.la/s/4faa09f80d3b1c37c4d4bd264c38760b59249fed5d35ef4995cc9f51ede7492ba37db64bee6706934f4dc22a946473dac3ad85f13f592d29b9ae46c9736bc6c1b1f8b7ecdeef9e74cfd55665a54e37ca75394433d91b43ada3df964508b35a189a8d29344500716ddc2de402888c11a4" alt="" />
                    </div>
                      <div className="right">
                        <div id="park">주차권</div>
                        <div id="barcode"><img src="https://cdn.pixabay.com/photo/2014/04/02/16/19/barcode-306926__480.png" alt="" /></div>
                        <div><p className="message">주차권을 사용하시려면 위의 바코드를 직원에게 보여주세요.<br/> 본 바코드는 상영 일시로부터 24시간 후 효력이 다합니다.<br/></p></div>
                      </div>
                     
                  </div>

                  
          </div>
        </div>
        </div>
        </div>
        <FooterBlack />
      </div>
    );
}
export default Pay;