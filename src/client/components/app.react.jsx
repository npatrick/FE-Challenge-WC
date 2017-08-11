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

  filter(event) {
    this.setState({filter: event.target.value});
  }

  render () {
    let toRender = this.state.countries;
    if (this.state.filter) {
      toRender = this.state.countries.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    }
    return (
      <div>
        <h1>Country List</h1>
        <br />
        <input type="text" onChange={this.filter.bind(this)} />
        <Table countries={toRender} />
      </div>
    );
  }
}
