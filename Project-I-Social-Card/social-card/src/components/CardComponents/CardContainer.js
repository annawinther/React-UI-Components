import React from 'react';
import './Card.css';
import './CardBanner';
import'./CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


function CardContainer ({ }) {
    return (
        <div className = "car-container">
        <CardBanner/>
        <CardContent/>
        </div>
    )
}


export default CardContainer;