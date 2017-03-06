import React from 'react';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';

var GraphView = React.createClass({
  mixins: [
    Faux.mixins.core,
    Faux.mixins.anim
  ],
  getInitialState() {
    return {
      chart: 'loading ....'
    }
  },
  componentDidMount(){
    const faux = this.connectFauxDOM('div.renderedD3', 'chart')
      d3.select(faux)
      .selectAll("div")
        .data(this.props.data)
      .enter().append("div")
        .style("width", function(d) { return d * 20 + "px"; })
        .text(function(d) { return d; })

      this.animateFauxDOM(800)
  },
  render(){
    return (
      <div>
        <div className='renderedD3'>
          {this.state.chart}
        </div>
        <button onClick={this.props.updateData}>
        </button>
      </div>
    );
  }
})

export default GraphView;
