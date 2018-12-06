import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>hi</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

