import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

// const headerText = {
//     text:
//       "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. ONce you feel comfortable using components you are well on your way to mastering React!"
//   };

// function HeaderContent ( ) {
//     return (
//         <div className="header-content">
//         <h3>{headerText.text}</h3>
//         </div>
//     )
// }
function HeaderContent ({ content }) {
    return (
    <div className="header-content">
        <HeaderTitle title={content.title}
                handle={content.handle}
                time={content.time}/>
        <p>{content.text}</p>
    </div>
    )
}

export default HeaderContent;