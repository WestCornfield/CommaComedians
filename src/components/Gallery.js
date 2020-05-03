import React from 'react';
import Comedian from './Comedian.js';
import MarkBrimble from '../assets/mark_brimble.png';
import MarkBrimbleGIF from '../assets/mark_brimble.gif';
import '../css/gallery.css';

class Gallery extends React.Component {

  state = {
    img: MarkBrimble
  }

  render() {
    return (
      <div className="gallery">
        <figure className="gallery__item gallery__item--1">
          <Comedian img={MarkBrimble} imgGIF={MarkBrimbleGIF} comic="Mark Brimble" />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <Comedian img={MarkBrimble} imgGIF={MarkBrimbleGIF} comic="Mark Brimble" />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <Comedian img={MarkBrimble} imgGIF={MarkBrimbleGIF} comic="Mark Brimble" />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <Comedian img={MarkBrimble} imgGIF={MarkBrimbleGIF} comic="Mark Brimble" />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <Comedian img={MarkBrimble} imgGIF={MarkBrimbleGIF} comic="Mark Brimble" />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <Comedian img={MarkBrimble} imgGIF={MarkBrimbleGIF} comic="Mark Brimble" />
        </figure>
      </div>
    );
  }
}

export default Gallery;
