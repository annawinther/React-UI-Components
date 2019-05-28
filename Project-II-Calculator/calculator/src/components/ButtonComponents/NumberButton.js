import React from 'react';
import './Button.css';

// const numbers = [7,8,9,4,5,6,1,2,3];
// {numbers.map(number => <button key={number} className={props.buttonStyle}>{number}</button>)}

function NumberButton (props){
    return (
        <div className="numbers">
           <div className={props.buttonStyle}>{props.text}</div>
        </div>
        
    )
}


export default NumberButton;