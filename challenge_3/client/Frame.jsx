import React from 'react';
import Pins from './Pins.jsx';

class Frame extends React.Component {
  constructor() {
    super();
    this.state = {
      frameScore: 0,
      throwOne: 0,
      throwTwo: 0,
      throw: 1,
      pins: 10
    }
  }

  handleFrameScore(num) {
    this.setState({
      frameScore: this.state.frameScore + num
    });
  }

  render() {
    const { throwOne, throwTwo } = this.state;
    return (
      <div>
        <h2>Frame: {this.props.frame}</h2>
        <h2>Throw 1: {throwOne}</h2>
        <h2>Throw 2: {throwTwo}</h2>
        <Pins pins={this.state.pins} handleFrameScore={this.handleFrameScore} />
      </div>
    )
  }
}

export default Frame;