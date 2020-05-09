import React from 'react';
import Main from './Main.js';
import ContactForm from './ContactForm.js';
import Gallery from './Gallery.js';
import Calendar from './Calendar.js'

class Tabs extends React.Component {

  constructor() {
    super();
    this.state = {
      activeKey : "main",
      mainClassName : "tabcontent",
      contactFormClassName : "hidden",
      galleryClassName : "hidden"
    }
  }

  componentDidUpdate() {
    if (this.props.activeKey !== this.state.activeKey) {
      this.setState({
        activeKey: this.props.activeKey
      });
    }
  }

  tabClassName(tab) {
    return (this.state.activeKey === tab) ? "tabcontent" : "hidden";
  }

  render() {
    return (
      <div id="tabs">
        <div className={this.tabClassName('main')} id="main">
          <Main />
        </div>
        <div className={this.tabClassName('contact-form')} id="contact-form">
          <ContactForm />
        </div>
        <div className={this.tabClassName('gallery')} id="gallery">
          <Gallery />
        </div>
        <div className={this.tabClassName('calendar')} id="calendar">
          <Calendar />
        </div>
      </div>);
  }
}

export default Tabs;
