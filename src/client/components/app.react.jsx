import React, { Component } from 'react';
import Table from './table.react.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Country List</h1>
        <br />
        <Table />
      </div>
    );
  }
}
