import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Movie.css';
import spiderman from '../asset/spiderman.jpg';
import dlu from '../asset/dontlookup.jpg';
import bang from '../asset/bang.jpg';
import gubo from '../asset/gubo.jpg';
import FooterBlack from '../component/FooterBlack.jsx';
import axios from 'axios';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import all from '../asset/all.png';
import twelve from '../asset/12.png';
import fifty from '../asset/15.png';

import Eternals from './Eternals';
import { getToken } from '../utils/Common';
class Movie extends Component {
    constructor() {
        super();
    

        this.state = {
          searchword:"",
          allMovies:[],
        };
        
      }
    

    setSearch = (e) => {
        this.setState({searchword:e.target.value});
        console.log(e.target.value);
    }

    drawsearch = () => {
        const word = this.state.searchword;
        if(word=="Eternals"||word=="이터널스"){
            document.location.href = '/Eternals';
        }
    }

    getMovie = async()=> {
        const token = getToken();
       
        const res= await axios.get("http://user.primarykey.shop:3000/movies?status=1&genreID=2&countryID=&rating=", {
            headers: { Authorization: sessionStorage.getItem('token')}}
          );
        this.setState({allMovies:res.data.allMovies});
        console.log(res);
      }
      
    
      componentDidMount()  {
      //영화데이터로딩
          this.getMovie();
      }
    
    
  render(){
      const {searchword} = this.state;
    return(
      <div className="Movie">
        <HeaderBlackVersion />
        
        <section id="mv">
        <div className="movie_title">영화 정보</div>
        <div className="mv_container">
            <div className="row">
                <div className="mv">
                <div className="mv_search">
                        <input value={searchword} type="text" placeholder="검색어를 입력하세요 (예 : 영화명/장르/감독)" onChange={(e)=>this.setSearch(e)}  />
                        <button onClick={()=>this.drawsearch()} id="searchbtn">검색</button>
                    </div>
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
                                <h3><p className="icon a12 ir_pm"><img src={twelve} alt="" />스파이더맨: 노 웨이 홈</p></h3>
                                <div className="infor_btn">
                                    <button>상세정보</button>
                                    <button>예매하기</button>
                                </div>
                            </div>
                        </div>
                        <div className="posterwrap">
                            <div className="poster">
                                <figure>
                                    <img src={dlu} srcset="assets/img/poster02@2.jpg 2x" alt=""/>
                                </figure>
                                <div className="rank"><strong>2</strong></div>
                            </div>
                            <div className="infor">
                                <h3><p className="icon a15 ir_pm"><img src={fifty} alt="" />돈 룩 업</p></h3>
                                <div className="infor_btn">
                                     <button>상세정보</button>
                                    <button>예매하기</button>
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
                                <h3><p className="icon a12 ir_pm"><img src={fifty} alt="" />소설가 구보의 하루</p></h3>
                                <div className="infor_btn">
                                    <button>상세정보</button>
                                    <button>예매하기</button>
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
                                <h3><p className="icon all ir_pm"><img src={all} alt="" />뱅드림! 필름 라이브 세컨드 스테이지</p></h3>
                                <div className="infor_btn">
                                    <button>상세정보</button>
                                    <button>예매하기</button>
                                </div>
                            </div>
                        </div>
                        <div className="posterwrap">
                            <div className="poster">
                                <figure>
                                    <img src="https://img.megabox.co.kr/SharedImg/2021/10/27/FhsmDr5hfwwoaHQ16TVMygsYjh7dDRhD_420.jpg" srcset="assets/img/poster01@2.jpg 2x" alt=""/>
                                </figure>
                                <div className="rank"><strong>5</strong></div>
                            </div>
                            <div className="infor">
                                <h3><p className="icon a12 ir_pm"><img src={twelve} alt="" />이터널스</p></h3>
                                <div className="infor_btn">
                                    <button>상세정보</button>
                                    <button onClick={()=>document.location.href = '/Eternals'}>예매하기</button>
                                </div>
                            </div>
                        </div>
                        <div className="posterwrap">
                            <div className="poster">
                                <figure>
                                    <img src="https://img.megabox.co.kr/SharedImg/2021/09/16/5kxrrz7YXuRfySllsNV3pFwar5WP9vhn_420.jpg" srcset="assets/img/poster02@2.jpg 2x" alt=""/>
                                </figure>
                                <div className="rank"><strong>6</strong></div>
                            </div>
                            <div className="infor">
                                <h3><p className="icon a15 ir_pm"><img src={twelve} alt="" />듄</p></h3>
                                <div className="infor_btn">
                                     <button>상세정보</button>
                                    <button>예매하기</button>
                                </div>
                            </div>
                        </div>
                        <div className="posterwrap">
                            <div className="poster">
                                <figure>
                                    <img src="https://img.megabox.co.kr/SharedImg/2021/09/29/fl6qV6UG8faiMppMO4LZp9VZlohic35T_420.jpg" srcset="assets/img/poster03@2.jpg 2x" alt=""/>
                                </figure>
                                <div className="rank"><strong>7</strong></div>

                            </div>
                            <div className="infor">
                                <h3><p className="icon a12 ir_pm"><img src={fifty} alt="" />베놈 2: 렛 데어 비 카니지</p></h3>
                                <div className="infor_btn">
                                    <button>상세정보</button>
                                    <button>예매하기</button>
                                </div>
                            </div>
                        </div>
                        <div className="posterwrap">
                            <div className="poster">
                                <figure>
                                    <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85239/85239_320.jpg" srcset="assets/img/poster04@2.jpg 2x" alt=""/>
                                </figure>
                                <div className="rank"><strong>8</strong></div>
                            </div>
                            <div className="infor">
                                <h3><p className="icon all ir_pm"><img src={fifty} alt="" />연애빠진 로맨스</p></h3>
                                <div className="infor_btn">
                                    <button>상세정보</button>
                                    <button>예매하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id="more">더보기</button>
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