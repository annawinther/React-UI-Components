import React from 'react';
import './Button.css';

const numbers = [1,2,3,4,5,6,7,8,9,0];

function NumbersButton (props){
    return (
        <div className="numbers">
            {numbers.map(number => <button key={number} className={props.buttonStyle}>{number}</button>)}
        </div>
    )
}


export default NumbersButton;