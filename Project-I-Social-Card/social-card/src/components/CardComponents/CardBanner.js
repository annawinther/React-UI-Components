import React from 'react';
import './Card.css';

// const backgroundImg= {
//     src: 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'
// };

function CardBanner ({ url, alt }){
    return (
        <div> 
        <img alt={alt} src={url} />
        </div>
    )
}

export default CardBanner;