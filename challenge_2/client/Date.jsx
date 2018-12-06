import React from 'react';

class Date extends React.Component {
  constructor() {
    super();
    this.state = {
      start: '',
      end: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    this.props.fetch(this.state.start, this.state.end);
  }

  render() {
    return (
      <div>
        <label>Start Date: </label>
        <input type="date" name="start" onChange={this.handleChange} />
        <br></br>
        <label>End Date: </label>
        <input type="date" name="end" onChange={this.handleChange} />
        <br></br>
        <button onClick={this.handleSubmit} >Submit</button>
      </div>
    )
  }
}

export default Date;
