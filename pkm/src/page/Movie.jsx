import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Movie.css';
import spiderman from '../asset/spiderman.jpg';
import dlu from '../asset/dontlookup.jpg';
import bang from '../asset/bang.jpg';
import eternals from '../asset/eternals.jpg';
import gubo from '../asset/gubo.jpg';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

class Movie extends Component {
  render(){
    return(
      <div className="Movie">
        <HeaderBlackVersion />
        
        <section id="mv">
        <div className="movie_title">영화 정보</div>
        <div className="mv_container">
            <div className="row">
                <div className="mv">
                    <div className="mv_title">
                        <ul>
                            <li className="active"><a href="#">박스오피스</a></li>
                            <li><a href="#">최신개봉작</a></li>
                            <li><a href="#">상영예정작</a></li>
                            <li><a href="#">큐레이션</a></li>
                        </ul>
                    </div>
                    <div className="mv_chart">
                        <div className="posterwrap">
                            <div className="poster">
                                <figure>
                                    <img src={spiderman} srcset="assets/img/poster01@2.jpg 2x" alt=""/>
                                </figure>
                                <div className="rank"><strong>1</strong></div>
                            </div>
                            <div className="infor">
                                <h3><p className="icon a12 ir_pm">12세 이상 관람가</p> <strong>스파이더맨: 노 웨이 홈</strong></h3>
                                <div className="infor_btn">
                                    <a href="#">상세정보</a>
                                    <a href="#">예매하기</a>
                                </div>
                            </div>
                        </div>
                        <div className="posterwrap">
                            <div className="poster">
                                <figure>
                                    <img src={dlu}srcset="assets/img/poster02@2.jpg 2x" alt=""/>
                                </figure>
                                <div className="rank"><strong>2</strong></div>
                            </div>
                            <div className="infor">
                                <h3><p className="icon a15 ir_pm">15세 이상 관람</p> <strong>돈 룩 업</strong></h3>
                                <div className="infor_btn">
                                    <a href="#">상세정보</a>
                                    <a href="#">예매하기</a>
                                </div>
                            </div>
                        </div>
                        <div className="posterwrap">
                            <div className="poster">
                                <figure>
                                    <img src={gubo} srcset="assets/img/poster03@2.jpg 2x" alt=""/>
                                </figure>
                                <div className="rank"><strong>3</strong></div>

                            </div>
                            <div className="infor">
                                <h3><p className="icon a12 ir_pm">12세 이상 관람</p> <strong>소설가 구보의 하루</strong></h3>
                                <div className="infor_btn">
                                    <a href="#">상세정보</a>
                                    <a href="#">예매하기</a>
                                </div>
                            </div>
                        </div>
                        <div className="posterwrap">
                            <div className="poster">
                                <figure>
                                    <img src={bang} srcset="assets/img/poster04@2.jpg 2x" alt=""/>
                                </figure>
                                <div className="rank"><strong>4</strong></div>
                            </div>
                            <div className="infor">
                                <h3><p className="icon all ir_pm">전체 관람가</p> <strong>뱅드림! 필름 라이브 세컨드 스테이지</strong></h3>
                                <div className="infor_btn">
                                    <a href="#">상세정보</a>
                                    <a href="#">예매하기</a>
                                </div>
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

export default Movie;