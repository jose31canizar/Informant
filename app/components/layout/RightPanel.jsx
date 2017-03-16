import React from 'react';
import Logo from './Logo.jsx';

class RightPanel extends React.Component {
  render() {

    var panelStyle;
    var showLogo;
    panelStyle = {
      right: '0'
    }
    showLogo = true;

    return (
      <div className={'RightPanel'} style={panelStyle}>
        <Logo showLogo={showLogo}/>
        <div className={'panelStories'}>
        <h3>Informant is a <i>web presence barometer</i> visualizing popular sentiment on top companies.</h3>
        <p>Informant aggregates social media data and produces a measure on online company sentiment and reputation. In tracking the state in real-time, Informant is able to give a clear picture of 'vox populi' opinions, whether they be spikes or smooth waves. Informant is meant as a stock market assistant tool, but also as an on-going narrative, visually analyzing real-time data into an immediate and concise scroll story.</p>
        </div>
      </div>
    );
  }
}

export default RightPanel;