import React from 'react';

class Pins extends React.Component {
  constructor() {
    super();
    this.state = {
      pinsHit: 0
    }
  }

  handleChange() {
    this.setState({
      pinsHit: event.target.value
    })
  }

  render() {
    let options = [];
    for(let i = 0; i<=props.pins; i++) {
      options.push(<option value={i} key={i}>{i}</option>);
    }
    return (
      <div>
        <h2>Select Number of Pins</h2>
        <select onChange={this.handleChange}>
          {options}
        </select>
        <button onClick={props.handleFrameScore(this.state.pinsHit)}>Throw</button>
      </div>
    )
  }

}

export default Pins;