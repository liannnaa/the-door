import React from 'react';
import './Header.css';

import door from '../media/door-fast.gif';
import title from '../media/title.gif';

function Header() {
  return (
    <div className="header">
        <div className="title-container">
            <img src={door} className="door" alt="door"/>
            <img src={title} className="main-title" alt="The Door"/>
            <img src={door} className="door" alt="door"/>
        </div>
        <p>By Lianna Poblete and Hannah Zhao</p>
        <h3>Step into the Unsettling Realm of 'The Door' – A Virtual Reality Journey Through Inescapable Failure.</h3>
    </div>
  );
}

export default Header;
