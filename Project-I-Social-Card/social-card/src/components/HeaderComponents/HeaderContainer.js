import React from 'react';
import './Header.css';
// import ReactDOM from 'react-dom';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderTitle';

// function HeaderContainer ({ }) {
//     return(
//         <div className="header-container">
//         <ImageThumbnail imageSource={imageattribute.src}
//         />
//         <HeaderTitle 
//             name={headerTitleContent.name}
//             handle={headerTitleContent.handle}
//             timestrap={headerTitleContent.timestrap}
//         />

//         </div>
//     )

// }

const imageSource = {
    src:
      "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
    alt: "lambda logo red"
  };
  
  // const headerTitleContent = {
  //   name: "Lambda School",
  //   handle: "@LambdaSchool",
  //   timestamp: "27 May"
  // };
  
  const headerText = {
    text:
      "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. ONce you feel comfortable using components you are well on your way to mastering React!"
  };
  
  
  function HeaderContainer() {
    return (
      <div className="header-container">
        <ImageThumbnail alt={imageSource.alt} src={imageSource.src} />
        <HeaderTitle
          name="Lambda School"
          handle="@LambdaSchool"
          timestamp="27th May 2019"
        />
        <HeaderContent text={headerText.text} />
      </div>
    );
  }

  export default HeaderContainer;

  