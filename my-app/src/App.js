import React from 'react';
import ContactForm from './components/ContactForm.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import './css/styles.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <ContactForm />
    </div>
  );
}

export default App;
