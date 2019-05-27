import React from 'react';
import './Header.css';


function HeaderTitle( {header, handle, timestamp} ) {
    return (
      <div className="header-title">
        <h3>{header}</h3>
        <h4>{handle}</h4>
        <h4>{timestamp}</h4>
      </div>
    );
  }
  
  export default HeaderTitle;