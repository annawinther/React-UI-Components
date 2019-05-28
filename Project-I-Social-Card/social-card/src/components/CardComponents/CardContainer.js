import React from 'react';
import './Card.css';
import './CardBanner';
import'./CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

// const cardContent = {
//     url: 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png',
//     alt: 'card image',
//     text: 'React makesit ainless to create interactive UIs. Design simple views for each state in your application',
//     header: 'Get started with React'
  
//   }
function CardContainer ({ cardContent }) {
    return (
        <div className = "card-container" onClick={(e) => {
            window.location.href="https://www.reactjs.org"}
        }>
          <div>
            <CardBanner url={cardContent.url} alt={cardContent.alt}/>
            <CardContent header={cardContent.header} text={cardContent.text}/>
           </div>  
        </div>
    )
}


export default CardContainer;