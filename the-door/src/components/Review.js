import React from 'react';
import './Review.css';

import r1 from '../media/rev1.MOV';
import r2 from '../media/rev2.MOV';
import r3 from '../media/rev3.MOV';
import r4 from '../media/rev4.MOV';

function Review() {
  return (
    <div className="peer-review">
      <h2>Peer Reviews</h2>
      <div className="reviews">
        <p>"Super sick and slay"</p>
        <p>"Oh that's so scary"</p>
        <p>"Oh wow"</p>
        <p>"Wait this is actually cool"</p>
      </div>
      <div className="videos">
        <div className="video-row">
          <video src={r1} controls></video>
          <video src={r2} controls></video>
        </div>
        <div className="video-row">
          <video src={r3} controls></video>
          <video src={r4} controls></video>
        </div>
      </div>
    </div>
  );
}

export default Review;
