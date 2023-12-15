import React from 'react';
import './Description.css'

import death from '../media/death.gif';
import open from '../media/open.gif';

function Description() {
  return (
    <div className="description">
      <p>
        Crafted by the creative minds of Lianna Poblete and Hannah Zhao,
        'The Door' is a groundbreaking Virtual Reality art piece that delves deep into the theme of 'inescapable failure'.
        This immersive experience transports users to a spooky,
        seemingly endless hallway,
        crafted with the advanced capabilities of Unreal Engine 5's Niagara system.
        As participants navigate this eerie space,
        they encounter a mysteriously fading and reappearing door,
        a flickering candle to guide their way,
        and a progressively intensifying heartbeat that resonates with their approach to the door.
        'The Door' pushes the boundaries of emotional impact in VR,
        offering an unparalleled exploration of suspense and surrealism.
      </p>
      <img src={death} className="death" alt="death"/>
      <img src={open} alt="open"/>
    </div>
  );
}

export default Description;
