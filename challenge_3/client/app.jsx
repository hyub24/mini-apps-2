import React from 'react';
import ReactDOM from 'react-dom';
import Pins from './Pins.jsx';
import Frame from './Frame.jsx';
import Score from './Score.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      frameScores: [0,0,0,0,0,0,0,0,0,0],
      pins: 10,
      currentFrame: 1,
      throw: 1
    }
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(num) {
    let frameScores = this.state.frameScores;
    frameScores[this.state.currentFrame - 1] += num;
    if(this.state.throw === 1) {
      this.setState({
        frameScores,
        pins: this.state.pins - num,
        throw: 2
      });
    } else {
      this.setState({
        frameScores,
        pins: 10,
        throw: 1,
        currentFrame: this.state.currentFrame + 1,
        score: this.state.score + frameScores[this.state.currentFrame - 1]
      })
    }
  }

  render() {
    const { score, frame } = this.state;
    let frames = [];
    for(let i = 1; i<=10; i++) {
      frames.push(<Frame frame={i} key={i} frameScore={this.state.frameScores[i-1]} />);
    }
    return (
      <div>
        <h1>Let's Bowl!</h1>
        <Score score={score} />
        <div id="frames">
          {frames}
        </div>
        <h2>Current Frame: {this.state.currentFrame}</h2>
        <h2>Throw: {this.state.throw}</h2>
        <Pins pins={this.state.pins} handleScore={this.handleScore} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

