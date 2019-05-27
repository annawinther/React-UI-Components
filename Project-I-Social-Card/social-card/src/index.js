import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/HeaderComponents/Header.css';
import App from './App';
// import HeaderContainer from './HeaderContainer';
// import ImageThumbnail from '/Users/Anna/Lambda School/Sprint 6 - React/Day 1 - FC-I/React-UI-Components/Project-I-Social-Card/social-card/src/components/HeaderComponents/ImageThumbnail.js';
// import HeaderTitle from './HeaderTitle';
// import HeaderContent from './HeaderTitle';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HeaderContainer />, document.getElementById('root'));
// ReactDOM.render(<CardContainer />, document.getElementById('root'));