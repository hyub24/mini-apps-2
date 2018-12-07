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
      currentFrame: 1
    }
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(num) {
    let frameScores = this.state.frameScores;
    frameScores[this.state.currentFrame - 1] += num;
    this.setState({ frameScores });
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
        <Pins pins={this.state.pins} handleScore={this.handleScore} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

