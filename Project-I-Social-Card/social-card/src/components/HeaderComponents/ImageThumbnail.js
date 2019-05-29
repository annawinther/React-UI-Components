import React from 'react';
import './Header.css';



// const imageattribute = {
//     src: "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
//     alt: "lambda-logo-red",
// }
// const imageSource = {
//     src:
//       "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
//     alt: "lambda logo red"
//   };

function ImageThumbnail({ url, alt} ) {
    return (
        <div className="image-thumbnail">
        <img alt={alt} src={url}/>
        </div>
    )
}

//  <ImageThumbnail imageSource={imageattribute.src} /> 


 export default ImageThumbnail;