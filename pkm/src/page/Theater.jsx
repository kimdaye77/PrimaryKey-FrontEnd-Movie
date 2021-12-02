import React, { Component } from 'react';
import TheaterApi from '../component/TheaterApi';
import axios from "axios";
import '../css/reset.css';
import '../css/Theater.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import PropTypes from "prop-types";
import { getToken } from '../utils/Common';

class Theater extends Component {

  state = {
    isLoading: true,
    theaterList: [],
    clickedTheater :"",
  };

  getTheaters = async()=> {
  
    const res= await axios.get("http://user.primarykey.shop:3000/theater?theaterAddress=서울", {
      headers: { Authorization: axios.defaults.headers.common['Authorization']}}
);
    const theaterList = res.data;
      
    this.setState({isLoading:false, theaterList});
    console.log(theaterList);
  };
  

  componentDidMount()  {
  //영화데이터로딩
      this.getTheaters();
  }

  handleClick = (e, clickedTheater) => {
    e.preventDefault();
    this.setState({clickedTheater:clickedTheater});
    this.handleClick = this.handleClick.bind(this);
    console.log(clickedTheater);
  };
  
  render(){
    const {isLoading, theaterList, theaterInfo, clickedTheater}= this.state;
    let theater_name = "";
    return(
      <div className="Theater">
        <HeaderBlackVersion />
        <p className="theater_title">전체극장</p>
        <div className="theater">
        {isLoading? (
            <div className="loader">
                <span className="loader_txt">Loading...</span>
            </div>
        ):(
            <div className="theater_content">
                <div className="title"></div>
                <div className="theaterbox">
                  <div className="theater_local">
                    <ul className="locallist">
                      <li className="clickedlocal">서울</li>
                      <li>경기/인천</li>
                      <li>충청/대전</li>
                      <li>전라/광주</li>
                      <li>경북/대구</li>
                      <li>경남/부산/울산</li>
                      <li>강원</li>
                      <li>제주</li>
                    </ul>
                  </div>
                  <div className="theater_list">           
                    {theaterList.map((theater)  => (
                        theater_name = theater.theater_name,
                        <button className = "lis" onClick={(e, clickedTheater) => (theater_name = theater.theater_name, clickedTheater=theater_name,  this.handleClick(e, clickedTheater), this.handleClick = this.handleClick.bind(this))}>
                          {theater_name} <br></br></button>
                    ))
                      }
                        
                    
                      
                  </div>  
                  <div className="gangnam">
                    
                  </div>      
                </div>
                          
            </div>
                )}
        </div>
        <FooterBlack />
      </div>
    );
  }
}

export default Theater;