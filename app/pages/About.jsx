import React from 'react';
import {Link} from 'react-router';
import AboutPageLayout from '../layout/AboutPageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <AboutPageLayout
          title={'About'}
          />
        <div className='about-image-container'>
          <h1>Informant</h1>
          <h2>A social metrics dashboard.</h2>
          <p>A project based out of Boulder, CO, Informant is a tool that visualizes the general mood of the public on top companies.</p>
          <p>Fluctuations in public sentiment are realized through Informant.</p>
          <p>Informant serves a dual purpose as a stock market assistant tool and as an ongoing narrative, streaming realtime emotion into an immediate and concise visualization.</p>





        </div>


        <div className='profile-container'>
          <div className='profile'>
            <img className='profile-pic' src={require('../assets/images/jose.jpg')}/>
            <p>Jose Canizares</p>
          </div>
          <div className='profile'>
            <img className='profile-pic' src={require('../assets/images/michael.jpg')}/>
            <p>Michael Xiao</p>
          </div>
          <div className='profile'>
            <img className='profile-pic' src={require('../assets/images/tyler.jpg')}/>
            <p>Tyler Lugger</p>
          </div>
          <div className='profile'>
            <img className='profile-pic' src={require('../assets/images/hunter.jpg')}/>
            <p>Hunter Leise</p>
          </div>
        </div>



      </div>
    );
  }
}

export default About;
