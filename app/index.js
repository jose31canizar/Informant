import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import AnimatedLocations from 'react-router-component-transition';
import {Location} from 'react-router-component';
// import CSSTransitionGroup from 'react-addons-css-transition-group';
// import PageTransition from 'react-router-page-transition'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' // ES6
import Sass from './scss/main.scss';
import Intro from './pages/Intro.jsx';
import Home from './pages/Home.jsx';
import Amazon from './pages/Amazon.jsx';
import Apple from './pages/Apple.jsx';
import Facebook from './pages/Facebook.jsx';
import Google from './pages/Google.jsx';
import Lyft from './pages/Lyft.jsx';
import Microsoft from './pages/Microsoft.jsx';
import Twitter from './pages/Twitter.jsx';
import Uber from './pages/Uber.jsx';
import About from './pages/About.jsx';
import TechStack from './pages/TechStack.jsx';
// import globalStyles from './assets/styles/_Fonts.scss';



//
// <App>
//   <AnimatedLocations hash
//           className="Application"
//           transitionName="push"
//           popStateTransitionName="pop"
//           transitionEnterTimeout={600}
//           transitionLeaveTimeout={600}>
//     <Location path="/" handler={Home}/>
//     <Location path="/twitter" handler={Twitter}/>
//     <Location path="/amazon" handler={Amazon}/>
//   </AnimatedLocations>
// </App>





ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Intro}/>
      <Route path="home" component={Home}/>
      <Route path="apple" component={Apple}/>
      <Route path="uber" component={Uber}/>
      <Route path="google" component={Google}/>
      <Route path="amazon" component={Amazon}/>
      <Route path="facebook" component={Facebook}/>
      <Route path="lyft" component={Lyft}/>
      <Route path="twitter" component={Twitter}/>
      <Route path="microsoft" component={Microsoft}/>
      <Route path="about" component={About}/>
      <Route path="techstack" component={TechStack}/>
    </Route>
  </Router>
  ,
document.getElementById('app'));
