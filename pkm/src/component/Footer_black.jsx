import { Component } from 'react';
import '../css/reset.css';
import '../css/Footer_black.css';

class Footer_black extends Component {
  render(){
    return(
      <div className="Footer_b">
        <div className="content_b">
          <p>PrimaryKey
            <span className="division">|</span>
            <span className="member">김나현</span>
            <span className="member">김다예</span>
            <span className="member">박창선</span>
            <span className="member">정종문</span>
            <span className="member">하혜민</span>
          </p>
          <p>한양대학교 ERICA DATABASE 수업 과제<span className="division">|</span>영화관 사이트</p>
          <p>© 2021 Team PrimaryKey. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer_black;