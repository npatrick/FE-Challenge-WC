import React, { Component } from 'react';
import Table from './table.react.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {countries: []};
  }

  componentWillMount () {
    this.CountryList();
  }

  CountryList () {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then( data => {
      return this.setState({countries: data})
    })
  }

  render () {
    return (
      <div>
        <h1>Country List</h1>
        <br />
        <Table countries={this.state.countries} />
      </div>
    );
  }
}
