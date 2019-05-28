import React from 'react';
import './Header.css';


// function HeaderTitle( {header, handle, timestamp} ) {
//     return (
//       <div className="header-title">
//         <h3>{header}</h3>
//         <span className="title">{handle}</span>
//         <p className="title">{timestamp}</p>
//       </div>
//     );
//   }
  
const content = {
  title: "Lambda School",
  handle: "@LambdaSchool",
  time: "27 May",
  text: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. ONce you feel comfortable using components you are well on your way to mastering React!"
}

function HeaderTitle ({  }) {
  return (
    <div className="header-title">
      <h1>{content.title}</h1>
      <h2>{content.handle}</h2>
      <h3>{content.time}</h3>
     </div>
  )

}

  export default HeaderTitle;