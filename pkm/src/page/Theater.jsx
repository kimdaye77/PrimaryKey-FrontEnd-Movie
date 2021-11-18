import React, { Component } from 'react';
import TheaterApi from '../component/TheaterApi';
import axios from "axios";
import '../css/reset.css';
import '../css/Theater.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';

class Theater extends Component {
  state = {
    isLoading: true,
    theaterList: [],
  };

  getTheaters = async()=> {
    const {
        data: {
            theaterList
        },

    } = await axios.get("http://user.primarykey.shop:3000/theater");
    this.setState({isLoading:false, theaterList});
    console.log(theaterList);
  };

  componentDidMount()  {
  //영화데이터로딩
      this.getTheaters();
  }
  
  render(){
    const {isLoading, theaterList}= this.state;
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
                <div className="theater_list">
                    {theaterList.map((theater) => (
                        <TheaterApi
                            theater_name={theater.theater_name}
                        />
                    ))}
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