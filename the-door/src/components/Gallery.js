import React from 'react';
import './Gallery.css';

import vid1 from '../media/short.mp4';
import vid2 from '../media/long.mp4';

import gif1 from '../media/gif1.gif';
import gif2 from '../media/gif2.gif';

function Gallery() {
  return (
    <div className="photo-gallery">
      <div className="video-row">
        <video src={vid1} controls></video>
        <img src={gif1} alt="Spooky Hallway in VR"/>
      </div>
      <div className="video-row">
        <img src={gif2} alt="Spooky Door in VR"/>
        <video src={vid2} controls></video>
      </div>
    </div>
  );
}

export default Gallery;
