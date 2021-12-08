import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Cast.css';
import FooterBlack from '../component/FooterBlack.jsx';
import HeaderBlackVersion from '../component/HeaderBlackVersion.jsx';
import axios from 'axios';
import { getToken } from '../utils/Common';

class Cast extends Component {
    constructor() {
        super();
    

        this.state = {
          castInfo :[],
        };    
      }
      getCast = async()=> {
        const token = getToken();
       
        const res= await axios.get("http://user.primarykey.shop:3000/cast/:castID=1", {
          headers: { Authorization: axios.defaults.headers.common['Authorization']}}
          // headers: {
          //   Authorization: `Bearer ${token}`}}
          );
        const castInfo = res.data;
        console.log(res);
      }
      
    
      componentDidMount()  {
      //영화데이터로딩
          this.getCast();
      }


  render(){
    return(
      <div className="Cast">
        <HeaderBlackVersion />
        
        <FooterBlack />
      </div>
    );
  }
}

export default Cast;