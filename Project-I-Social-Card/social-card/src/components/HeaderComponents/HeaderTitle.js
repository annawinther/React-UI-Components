import React from 'react';
import './Header.css';


function HeaderTitle( {header, handle, timestamp} ) {
    return (
      <div className="header-title">
        <h3>{header}</h3>
        <span>{handle}</span>
        <p>{timestamp}</p>
      </div>
    );
  }
  
  export default HeaderTitle;