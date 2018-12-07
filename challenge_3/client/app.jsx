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
      frame: 1
    }
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(num) {
    this.setState({
      score: this.state.score + num,
      frame: this.state.frame + 1
    })
  }

  render() {
    const { score, frame } = this.state;
    return (
      <div>
        <h1>Let's Bowl!</h1>
        <Score score={score} />
        <Frame frame={frame} handleScore={this.handleScore}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

