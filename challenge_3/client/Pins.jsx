import React from 'react';

class Pins extends React.Component {
  constructor(props) {
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

  resetPins() {
    if(this.state.pinsHit > 5) {
      this.setState({
        pinsHit: 0
      })
    }
  }

  render() {
    let options = [];
    console.log('hi')
    for(let i = 0; i <= this.props.pins; i++) {
      options.push(<option value={i} key={i}>{i}</option>);        
    }
    return (
      <div>
        <h2>Select Number of Pins</h2>
        <select onChange={this.handleChange}>
          {options}
        </select>
        <button onClick={() => {
          this.props.handleScore(Number(this.state.pinsHit));
          this.resetPins();
        }}>Throw</button>
      </div>
    )
  }

}

export default Pins;