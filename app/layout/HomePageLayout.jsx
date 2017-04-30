import React from 'react';
import {Link} from 'react-router';
import GraphView from '../graphs/PieGraph.jsx';
import HomeTextLayout from './HomeTextLayout.jsx';
import HomeGraphLayout from './HomeGraphLayout.jsx';

class PageLayout extends React.Component {
  render() {
    return (
      <div className='page'>
        <HomeTextLayout
          title={this.props.title}
          description={this.props.description}
        />
      <div className='home-description'>
        <p>Informant aggregates social media data and produces a measure on online company sentiment and reputation.
In tracking the state in real-time, Informant is able to give a clear picture of 'vox populi' opinions.
Informant has a dual purpose: it's a stock market assistant tool, but also an on-going narrative, streaming real-time emotion into an immediate and concise visualization.</p>
<HomeGraphLayout
  />
      </div>

        <div className='page-bg-image-container'>
          <img className='page-bg-image' src={require('../assets/images/mountains.jpg')} />
        </div>
        <div className='down-arrow-container'>
          <Link to='amazon'>
            Amazon
          </Link>
          <Link to='apple'>
            Apple
          </Link>
          <Link to='facebook'>
            Facebook
          </Link>
          <Link to='google'>
            Google
          </Link>
          <Link to='lyft'>
            Lyft
          </Link>
          <Link to='microsoft'>
            Microsoft
          </Link>
          <Link to='twitter'>
            Twitter
          </Link>
          <Link to='Uber'>
            Uber
          </Link>
        </div>
      </div>
    );
  }
}

export default PageLayout;