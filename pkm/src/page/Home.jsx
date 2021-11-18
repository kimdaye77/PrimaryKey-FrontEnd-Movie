/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Home.css';
import left from '../asset/left.png'
import right from '../asset/right.png'
import Footer from '../component/Footer.jsx';
import HeaderWhiteVersion from '../component/HeaderWhiteVersion.jsx';
import MovieList from '../component/MovieList';


class Home extends Component {
  
  
  render(){
    return(
      <div className="Home">
        <HeaderWhiteVersion />
        <div className="home_content">
          <p className="home_title">박스오피스</p>
          <MovieList/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;