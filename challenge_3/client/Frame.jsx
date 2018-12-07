import React from 'react';

class Frame extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="frame">
        <h2>Frame: {this.props.frame}</h2>
        <h2>Score: {this.props.frameScore}</h2>
      </div>
    )
  }
}

export default Frame;