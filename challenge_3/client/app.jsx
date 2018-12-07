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
  }

  render() {
    const { score, frame } = this.state;
    return (
      <div>
        <Score score={score} />
        <Frame frame={frame} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

