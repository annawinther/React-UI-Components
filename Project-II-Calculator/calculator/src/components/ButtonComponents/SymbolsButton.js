import React from 'react';
import '/Users/Anna/Lambda School/Sprint 6 - React/Day 1 - FC-I/React-UI-Components/Project-II-Calculator/calculator/src/components/ButtonComponents/Button.css';


function SymbolButton ( props ) {
    return (
        <div className="symbols">
        <div className={props.buttonStyle}>{props.text}</div>
        </div>
    )
}

export default SymbolButton;