import React from 'react';
import './Header.css';



const imageattribute = {
    src: "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
    alt: "lambda-logo-red",
}

function ImageThumbnail({content}) {
    return (
        <img alt="" src={imageattribute.src}/>
    )
}

//  <ImageThumbnail imageSource={imageattribute.src} /> 


 export default ImageThumbnail;