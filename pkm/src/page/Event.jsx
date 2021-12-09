import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Event.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { 
  Navigation, 
  Pagination, 
  Scrollbar, 
  A11y 
} from "swiper";
//style
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/pagination/pagination.scss"; // *
import "swiper/components/scrollbar/scrollbar.scss"; // *

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]); // *

class Event extends Component {
  render(){
    return(
      <div className="Event">
        <HeaderBlackVersion />
        <section id="event">
        <p id="evn_title">진행중인 이벤트</p>
        <div className="event_title">
            <ul>
                <li className="active"><a href="#">전체</a></li>
                <li><a href="#">영화</a></li>
                <li><a href="#">극장</a></li>
                <li><a href="#">제휴/할인</a></li>
            </ul>
        </div>
        <div className="container">
            <div className="row">
                <div className="event">
                    <h2>새로운 이벤트</h2>
                    <div class="slider">
           <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide ss1">
                        <div class="container">
                            <div class="row">
                                {/* <h3>스피드 무비 파이터</h3>
                                <p>수험생, 청소년이라면 누구나 6천원 관람!</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide ss2">
                        <div class="container">
                            <div class="row">
                                {/* <h3>어벤져스 : 앤드게임</h3> */}
                                {/* <p>역대 최단 기간 1000만 관객 돌파 기록 </p> */}
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide ss3">
                        <div class="container">
                            <div class="row">
                                {/* <h3>어벤져스 : 앤드게임</h3> */}
                                {/* <p>역대 최단 기간 1000만 관객 돌파 기록 </p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <div className="event_box">
        <h2 id="evn_list">이벤트 목록</h2>
                    <div className="event_wrap">
                    
                        <div className="event_left">
                            <div className="event_slider">
                                <a><img src="https://img.megabox.co.kr/SharedImg/event/2021/11/09/mcZThy21xOiPAA9RJilrFEqUXPQqDvBk.jpg" srcset="assets/img/event01@2.jpg 2x" alt=""/></a>
                            </div>
                            <div className="event_box1">
                                <a><img src="https://img.megabox.co.kr/SharedImg/event/2021/11/19/qXs7iUdpuTHOOqyxJKV8d4Xrrrluw9pv.jpg" srcset="assets/img/event02@2.jpg 2x" alt=""/></a>
                            </div>
                            <div className="event_box2">
                                <a><img src="https://img.megabox.co.kr/SharedImg/event/2021/03/05/9QskdwL1zUcEAJoueuLNvKzUHNsq3zcY.jpg" srcset="assets/img/event03@2.jpg 2x" alt=""/></a>
                            </div>
                            
                        </div>
                        <div className="event_right">
                            <div className="event_slider">
                                <a><img src="https://img.megabox.co.kr/SharedImg/event/2020/12/17/oBBJtRa79UJGAHmrF18Q1FldLA5gxy9s.jpg" srcset="assets/img/event01@2.jpg 2x" alt=""/></a>
                            </div>
                            <div className="event_box1">
                                <a><img src="https://img.megabox.co.kr/SharedImg/event/2021/11/22/sunjJib5Q11SzOlLS348YLwmlN4OjNcD.jpg" srcset="assets/img/event02@2.jpg 2x" alt=""/></a>
                            </div>
                            <div className="event_box2">
                                <a><img src="https://img.megabox.co.kr/SharedImg/event/2021/11/04/hqwZ76566sktDWXzc0eyV3uGkWBVgHcH.jpg" srcset="assets/img/event03@2.jpg 2x" alt=""/></a>
                            </div>


                            
                        </div>
                        <div className="event_right">
                            <a><img src="https://img.megabox.co.kr/SharedImg/event/2021/12/08/qjmlX9n9VXZoXggMAcQpZnujEF7h5kmJ.jpg" srcset="assets/img/event04@2.jpg 2x" alt=""/></a>
                            <a><img src="https://img.megabox.co.kr/SharedImg/event/2021/12/03/nhXtHBtmhosz9lW9TO3bXceuCOYdxFoV.jpg" srcset="assets/img/event04@2.jpg 2x" alt=""/></a>
                            <a><img src="https://img.megabox.co.kr/SharedImg/event/2021/12/07/ioNv1hcd5R5SljOaEMhd8XwsZxsAH1WX.jpg" srcset="assets/img/event04@2.jpg 2x" alt=""/></a>
                            
                        </div>
                    </div>
        </div>

      
                    
                </div>
            </div>
        </div>
    </section>
        <FooterBlack />
      </div>
    );
  }
}

export default Event;