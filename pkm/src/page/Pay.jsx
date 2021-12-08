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
                      
                      <img src="https://w.namu.la/s/18aa2898e80a4c2d30d47ff82117fe009daf6c0e93d768f3eb80d204edbb734d0488f9c2fd0af2f4ed6fcc39883bc719ee07cbce83618dbe95997f700e2821555daa5b2a81763d85018fb32af84bf8c98e194e76244806fb532461e78e8f02bb8317a2d7b68049d46c9887e3f18bc373" alt="" />
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