import React, { Component } from 'react';
import TheaterApi from '../component/TheaterApi';
import axios from "axios";
import '../css/reset.css';
import '../css/Theater.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import PropTypes from "prop-types";

class Theater extends Component {
  state = {
    isLoading: true,
    theaterList: [],
    theaterInfo:[],
    clickedTheater :"",
  };

  getTheaters = async()=> {
    const {
        data: {
            theaterList
        },

    } = await axios.get("http://user.primarykey.shop:3000/theater");
    const {
      data:{
        theaterInfo
      },
    } = await axios.get("http://user.primarykey.shop:3000/theater/:theaterID");
    this.setState({isLoading:false, theaterList, theaterInfo});
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
                    지역들
                  </div>
                  <div className="theater_list">                
                      {theaterList.map((theater)  => (
                          theater_name = theater.theater_name,
                         <a href="#" className="theater_name" onClick={(e, clickedTheater) => (theater_name = theater.theater_name, clickedTheater=theater_name,  this.handleClick(e, clickedTheater), this.handleClick = this.handleClick.bind(this))}>
                           {theater_name} <br></br></a>
                      ))
                        }
                        
                    
                      
                  </div>  
                  <div className="gangnam">
                    {theaterInfo.map((t) => (
                        <TheaterApi
                            theater_name={t.theater_name}
                            theater_image = {t.theater_image}
                        />
                    ))}
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