import React from 'react';
import './Header.css';

const headerText = {
    text:
      "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. ONce you feel comfortable using components you are well on your way to mastering React!"
  };


function HeaderContent ({ headerText }) {
    return (
        <div className="header-content">
        <p>{headerText.text}</p>
      </div>
    )
}