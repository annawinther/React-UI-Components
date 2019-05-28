import React from 'react';
import './Card.css';

function CardContent ({ title, text }){
    return (
        <div className="card-content">
        <h4>{title}</h4>
        <p>{text}</p>
        </div>
    )
}


export default CardContent;