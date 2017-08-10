import React, { Component } from 'react';
import fetch, { fetchUrl } from 'fetch';

const options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin, cache-control, pragma'
  }
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
    fetchUrl('https://restcountries.eu/rest/v2/all', options, (err, meta, body) => {
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
