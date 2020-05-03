import React from 'react';

import FacebookLogo from '../assets/fb-logo.svg';
import InstagramLogo from '../assets/instagram-logo.png';
import TwitterLogo from '../assets/twitter-logo.png';

class ContactForm extends React.Component {
  render()  {
    return (
      <div class="contact" id="contact">
        <h1>Contact Us</h1>
        <div class="contact-buttons">
          <a href="https://www.facebook.com/pg/commacommacommacommacommacomedians"><img class="contact-logo-img" src={FacebookLogo}></img></a>
          <a href="https://twitter.com/CommaComedians"><img class="contact-logo-img" src={TwitterLogo}></img></a>
          <a href="https://www.instagram.com/commacomedians"><img class="contact-logo-img" src={InstagramLogo}></img></a>
        </div>
      </div>
    );
  }
}

export default ContactForm;
