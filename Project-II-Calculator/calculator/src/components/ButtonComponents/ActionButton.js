import React from 'react';
import './Button.css';

function ActionButton ( props ) {
    return (
        <div className="action-buttons">
            <div className={props.buttonStyle}>{props.text}</div>
        </div>
    )
}

export default ActionButton