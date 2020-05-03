import React from 'react';
import Main from './Main.js';
import ContactForm from './ContactForm.js';

class Tabs extends React.Component {

  constructor() {
    super();
    this.state = {
      activeKey : "main",
      mainClassName : "tabcontent",
      contactFormClassName : "hidden"
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
        contactFormClassName : "hidden"
      });
    } else if (newActiveKey === "contact-form") {
      this.setState({
        activeKey : newActiveKey,
        mainClassName : "hidden",
        contactFormClassName : "tabcontent"
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
      </div>);
  }
}

export default Tabs;
