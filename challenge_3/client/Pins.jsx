import React from 'react';

class Pins extends React.Component {
  constructor() {
    super();
    this.state = {
      pinsHit: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      pinsHit: event.target.value
    })
  }

  render() {
    let options = [];
    for(let i = 0; i <= this.props.pins; i++) {
      options.push(<option value={i} key={i}>{i}</option>);
    }
    return (
      <div>
        <h2>Select Number of Pins</h2>
        <select onChange={this.handleChange}>
          {options}
        </select>
        <button onClick={() => this.props.handleFrameScore(Number(this.state.pinsHit))}>Throw</button>
      </div>
    )
  }

}

export default Pins;