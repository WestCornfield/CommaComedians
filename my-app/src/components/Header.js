import React from 'react';
import CommaComediansLogo from '../assets/CommaComedians.svg';

class Header extends React.Component {
  render() {
    return  (
      <div className="header-container">
        <a href="#default" className="logo"><img className="logo-img" src={CommaComediansLogo}></img></a>
        <div className="header-right">
          <a className="active header" href="#home">Home</a>
          <a className="header" href="#about">Who Are We?</a>
          <a className="header" href="#contact">Contact</a>
        </div>
      </div>
      );
  }
}

export default Header;
