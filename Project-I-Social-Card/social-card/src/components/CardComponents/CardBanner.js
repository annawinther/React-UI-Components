import React from 'react';
import './Card.css';

const backgroundImg= {
    src: 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'
};

function CardBanner ({ content}){
    return (
        <img alt={backgroundImg.alt} src={backgroundImg.src} />
    )
}

export default CardBanner;