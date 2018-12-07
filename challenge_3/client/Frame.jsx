import React from 'react';
import Pins from './Pins.jsx';

class Frame extends React.Component {
  constructor() {
    super();
    this.state = {
      frameScore: 0,
      throw: 1,
      pins: 10
    }
    this.handleFrameScore = this.handleFrameScore.bind(this);
  }

  handleFrameScore(num) {
    if(this.state.throw === 2) {
      this.props.handleScore(num + this.state.frameScore);
      this.setState({
        frameScore: 0,
        throw: 1,
        pins: 10
      });
    } else {
      this.setState({
        frameScore: this.state.frameScore + num,
        pins: this.state.pins - num,
        throw: 2
      });
    }
  }

  render() {
    const { throwOne, throwTwo } = this.state;
    return (
      <div>
        <h2>Frame: {this.props.frame}</h2>
        <h2>Frame Score: {this.state.frameScore}</h2>
        <Pins pins={this.state.pins} handleFrameScore={this.handleFrameScore} />
      </div>
    )
  }
}

export default Frame;