import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Lyft extends React.Component {
  render() {
    return (
      <div>
        <PageLayout
          title={'Lyft'}
          description={'Opinions on Lyft?'}
          />
      </div>
    );
  }
}

export default Lyft;
