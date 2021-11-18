//극장 목록
import { Component } from 'react';
import TheaterApi from './TheaterApi';
import React from "react";
import axios from "axios";
import '../css/reset.css';

class TheaterList extends Component {

  state = {
    isLoading: true,
    theaters: [],
  };

  getTheaters = async () => {
    const {
      data: {
        data: {theaters},
    },
  } = await axios.get("http://user.primarykey.shop/theater");
    this.setState({isLoading:false, theaters});
  };

  componentDidMount()  {
  //영화데이터로딩
      this.getTheaters();
  }
  
    
  render(){
    const {isLoading, theaters}= this.state;
    return (
      <>
        <section className="contatiner">
        {isLoading? (
            <div className="loader">
                <span className="loader_txt">Loading...</span>
            </div>
        ):(
            <div className="theater_list">
                <div className="title">
                    <TheaterApi
                        theater_name={theaters.theater_name}
                    />
                </div>                     
            </div>
                )}

            </section>
        </>

        );
    }

}
export default TheaterList;