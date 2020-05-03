import React from 'react';
import CommaComediansLogo from '../assets/CommaComedians.svg';

class Header extends React.Component {
  render() {
    return  (
      <div class="header-container">
        <a href="#default" class="logo"><img class="logo-img" src={CommaComediansLogo}></img></a>
        <div class="header-right">
          <a class="active header" href="#home">Home</a>
          <a class="header" href="#about">Who Are We?</a>
          <a class="header" href="#contact">Contact</a>
        </div>
      </div>
      );
  }
}

export default Header;
