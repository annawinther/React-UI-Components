import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const content = {
  title: "Lambda School",
  handle: "@LambdaSchool",
  time: "27 May",
  text: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. ONce you feel comfortable using components you are well on your way to mastering React!"
}

const image = {
  url: "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
  alt: "logo"
}

const cardContent = {
  url: 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png',
  alt: 'card image',
  text: 'React makes it painless to create interactive UIs. Design simple views for each state in your application',
  header: 'Get started with React'

}

// const App = () => {
//   return (
//     <div>
//       <h3>Welcome to React Social Card!</h3>
//       <p>
//         Begin by exploring the `components` directory. You'll notice we have a
//         few files that we've already included in there to get you started right
//         away building components. You'll need to make sure you include your
//         components that you build in this file to watch your app come to life
//       </p>
//       <p>
//         <strong>
//           Don't forget to `default export` your components and import them here
//           inside of this file in order to make them work.
//         </strong>
//       </p>
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="body-container">
      <HeaderContainer content={content} image={image}/>
      <CardContainer cardContent={cardContent}/>
    </div>
  )
}

export default App;
