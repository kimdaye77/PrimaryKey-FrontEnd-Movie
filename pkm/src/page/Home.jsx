import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Home.css';
import left from '../asset/left.png'
import right from '../asset/right.png'
import Footer from '../component/Footer.jsx';
import Header_white_version from '../component/Header_white_version.jsx';


class Home extends Component {
  render(){
    return(
      <div className="Home">
        <Header_white_version />
        <div className="home_content">
          <p className="home_title">박스오피스</p>
          <div className="chart">
            <img src={left} className="left" alt="left arrow" />
            영화들
            <img src={right} className="right" alt="right arrow" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;