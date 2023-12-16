import React from 'react';
import './Description.css'

import death from '../media/death.gif';
import open from '../media/open.gif';

function Description() {
  return (
    <div className="description">
      <p>
      The Door is an exploratory VR experience that challenges users to confront the fear of the unknown.
      Crafted by Lianna Poblete and Hannah Zhao,
      this project pushes the boundaries of emotional impact in virtual reality.
      Users find themselves in a spooky,
      seemingly endless hallway,
      embodying the metaphor of stepping into new experiences.
      Utilizing Unreal Engine 5’s Niagara system,
      'The Door' presents a visually stunning scenario where a door materializes from particles,
      symbolizing both fear and allure.
      Accompanying the journey are elements like a candle to navigate the darkness and a heartbeat sound that intensifies as one approaches the door,
      enhancing the surreal and unsettling atmosphere.
      </p>
      <img src={death} className="death" alt="death"/>
      <img src={open} alt="open"/>
    </div>
  );
}

export default Description;
