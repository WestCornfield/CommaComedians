import React from 'react';
import Main from './Main.js';
import ContactForm from './ContactForm.js';
import Gallery from './Gallery.js';

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
      this.updateActiveTab(this.props.activeKey)
    }
  }

  updateActiveTab(newActiveKey) {
    if (newActiveKey === "main") {
      this.setState({
        activeKey : newActiveKey,
        mainClassName : "tabcontent",
        contactFormClassName : "hidden",
        galleryClassName : "hidden"
      });
    } else if (newActiveKey === "contact-form") {
      this.setState({
        activeKey : newActiveKey,
        mainClassName : "hidden",
        contactFormClassName : "tabcontent",
        galleryClassName : "hidden"
      });
    } else if (newActiveKey === "gallery") {
      this.setState({
        activeKey : newActiveKey,
        mainClassName : "hidden",
        contactFormClassName : "hidden",
        galleryClassName : "tabcontent"
      });
    }
  }

  render() {
    return (
      <div id="tabs">
        <div className={this.state.mainClassName} id="main">
          <Main />
        </div>
        <div className={this.state.contactFormClassName} id="contact-form">
          <ContactForm />
        </div>
        <div className={this.state.galleryClassName} id="gallery">
          <Gallery />
        </div>
      </div>);
  }
}

export default Tabs;
