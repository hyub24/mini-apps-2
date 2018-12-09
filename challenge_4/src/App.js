import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './Actions.js';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(actions.setMines);
    this.props.dispatch(actions.setNumbers);
  }

  render() {
    console.log(this.props.field)
    let table;
    if(this.props.field) {
      table = this.props.field.map(row => <tr>{row.map(column => <td>{column}</td>)}</tr>);
    }
    return (
      <div>
        {table}
      </div>
    );
  }
}

const wrappedApp = connect((store) => {
  return {
    field: store,
  }
})(App)
export default wrappedApp;
