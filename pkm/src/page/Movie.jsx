import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Movie.css';
import spiderman from '../asset/spiderman.jpg';
import dlu from '../asset/dontlookup.jpg';
import bang from '../asset/bang.jpg';
import eternals from '../asset/eternals.jpg';
import gubo from '../asset/gubo.jpg';
import FooterBlack from '../component/FooterBlack.jsx';
import axios from 'axios';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

import Eternals from './Eternals';
import { getToken } from '../utils/Common';
class Movie extends Component {
    constructor() {
        super();
    

        this.state = {
          searchword:"",
        };
        
      }
    
      getFillter = async()=> {
        const res= await axios.get("http://user.primarykey.shop:3000/movies?status=1&genreID=&countryID=&rating=", {
          headers: { Authorization: sessionStorage.getItem("token")}}
          // headers: {
          //   Authorization: `Bearer ${token}`}}
          );
        const currentMovies = res.data;
        console.log(res);
        
      }
      
    
      componentDidMount()  {
      //영화데이터로딩
          this.getFillter();
      }

    setSearch = (e) => {
        this.setState({searchword:e.target.value});
        console.log(e.target.value);
    }

    drawsearch = () => {
        const word = this.state.searchword;
        if(word=="드니 빌뇌브"||word=="드니빌뇌브"){
            document.location.href = '/Cast'
        }
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
                                <h3><p className="icon a12 ir_pm">12세 이상 관람가</p>
                                <p>스파이더맨: 노 웨이 홈</p></h3>
                                <div className="infor_btn">
                                    <button>상세정보</button>
                                    <button>예매하기</button>
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
                                <h3><p className="icon a15 ir_pm">15세 이상 관람</p> <p>돈 룩 업</p></h3>
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
                                <h3><p className="icon a12 ir_pm">12세 이상 관람</p> <p>소설가 구보의 하루</p></h3>
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
                                <h3><p className="icon all ir_pm">전체 관람가</p> <p>뱅드림! 필름 라이브 세컨드 스테이지</p></h3>
                                <div className="infor_btn">
                                    <button>상세정보</button>
                                    <button>예매하기</button>
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