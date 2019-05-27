import React from 'react';
import './Header.css';


function HeaderTitle( {header, handle, timestamp} ) {
    return (
      <div className="header-title">
        <h3>{header}</h3>
        <span className="title">{handle}</span>
        <p className="title">{timestamp}</p>
      </div>
    );
  }
  
  export default HeaderTitle;