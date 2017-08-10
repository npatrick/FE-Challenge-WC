import React, { Component } from 'react';
import fetch, { fetchUrl } from 'fetch';

const headerOptions = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept'
};

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {countries: []};
  }

  componentDidMount () {
    this.CountryList();
  }

  CountryList () {
    fetchUrl('https://restcountries.eu/rest/v2/all', headerOptions, (err, meta, body) => {
      console.log('what is body??', body);
      this.setState({countries: body});
    });
  }

  // renderCountryList () {
  //   return this.state.countries.map((item, index) => {
  //   });
  // }

  render () {

    return (
      <h2>{this.state.countries}</h2>
    );
  }
}
