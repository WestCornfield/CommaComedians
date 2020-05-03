import React from 'react';

import FacebookLogo from '../assets/fb-logo.svg';
import InstagramLogo from '../assets/instagram-logo.png';
import TwitterLogo from '../assets/twitter-logo.png';

class ContactForm extends React.Component {
  render()  {
    return (
      <div className="contact" id="contact">
        <h1>Contact Us</h1>
        <div className="contact-buttons">
          <a href="https://www.facebook.com/pg/commacommacommacommacommacomedians"><img className="contact-logo-img" src={FacebookLogo} alt="Comma Comedians Facebook"></img></a>
          <a href="https://twitter.com/CommaComedians"><img className="contact-logo-img" src={TwitterLogo} alt="Comma Comedians Twitter"></img></a>
          <a href="https://www.instagram.com/commacomedians"><img className="contact-logo-img" src={InstagramLogo} alt="Comma Comedians Instagram"></img></a>
        </div>
      </div>
    );
  }
}

export default ContactForm;
