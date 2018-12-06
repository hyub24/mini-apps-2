import React from 'react';

class Date extends React.Component {
  constructor() {
    super();
    this.state = {
      start: '',
      end: ''
    }
  }

  render() {
    return (
      <div>
        <label>Start Date: </label>
        <input type="date" name="start" />
        <br></br>
        <label>End Date: </label>
        <input type="date" name="end" />
        <br></br>
        <button>Submit</button>
      </div>
    )
  }
}

export default Date;
