import React, { Component } from 'react';
import '../css/reset.css';
import '../css/Home.css';
import Footer from '../component/Footer.jsx';
import Header_white_version from '../component/Header_white_version.jsx';


class Home extends Component {
  render(){
    return(
      <div className="Home">
        <Header_white_version />
        <div className="content_wrap">
          본문 들어갈 자리
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;