import React from 'react';
import CommaComediansLogo from '../assets/CommaComedians.svg';

class TabHeader extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTab : "home",
      homeClassName : "active header",
      mainClassName : "header",
      contactFormClassName : "header",
      galleryClassName: "header"
    }
  }

  handleClick(tab) {
    this.props.handleTabClick(tab);
    this.updateActiveTab(tab);
  }

  updateActiveTab(tab) {
    if (tab !== this.state.activeTab) {
      if (tab === "home") {
        this.setState({
          activeTab: "home",
          homeClassName : "active header",
          mainClassName : "header",
          contactFormClassName : "header",
          galleryClassName: "header"
        });
      } else if (tab === "main") {
        this.setState({
          activeTab: "main",
          homeClassName : "header",
          mainClassName : "active header",
          contactFormClassName : "header",
          galleryClassName: "header"
        });
      } else if (tab === "contact-form") {
        this.setState({
          activeTab: "contact-form",
          homeClassName : "header",
          mainClassName : "header",
          contactFormClassName : "active header",
          galleryClassName: "header"
        });
      } else if (tab === "gallery") {
        this.setState({
          activeTab: "contact-form",
          homeClassName : "header",
          mainClassName : "header",
          contactFormClassName : "header",
          galleryClassName: "active header"
        });
      }
    }
  }

  render() {
    return (
      <div className="header-container">
        <a href="#default" className="logo"><img className="logo-img" src={CommaComediansLogo} alt="Comma Comedians Logo"></img></a>
        <div className="header-right">
          <a className={this.state.homeClassName} onClick={() => this.updateActiveTab("home")} href="#home">Home</a>
          <a className={this.state.mainClassName} onClick={() => this.handleClick("main")} href="#main" >Who Are We?</a>
          <a className={this.state.contactFormClassName} onClick={() => this.handleClick("contact-form")} href="#contact-form" >Contact</a>
          <a className={this.state.galleryClassName} onClick={() => this.handleClick("gallery")} href="#gallery" >Meet the Commas</a>
        </div>
      </div>);
  }
}

export default TabHeader;
