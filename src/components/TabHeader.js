import React from 'react';
import CommaComediansLogo from '../assets/CommaComedians.svg';

class TabHeader extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTab : "home"
    }
  }

  tabClassName(tab) {
    return (this.state.activeTab === tab) ? "active header" : "header";
  }

  handleClick(tab) {
    this.updateActiveTab(tab);
    this.props.handleTabClick(tab);
  }

  updateActiveTab(tab) {
    if (tab !== this.state.activeTab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="header-container">
        <a href="#default" className="logo"><img className="logo-img" src={CommaComediansLogo} alt="Comma Comedians Logo"></img></a>
        <div className="header-right">
          <a className={this.tabClassName("home")} onClick={() => this.updateActiveTab("home")} href="#home">Home</a>
          <a className={this.tabClassName("main")} onClick={() => this.handleClick("main")} href="#main" >Who Are We?</a>
          <a className={this.tabClassName("contact-form")} onClick={() => this.handleClick("contact-form")} href="#contact-form" >Contact</a>
          <a className={this.tabClassName("gallery")} onClick={() => this.handleClick("gallery")} href="#gallery" >Meet the Commas</a>
          <a className={this.tabClassName("calendar")} onClick={() => this.handleClick("calendar")} href="#calendar" >Calendar</a>
        </div>
      </div>);
  }
}

export default TabHeader;
