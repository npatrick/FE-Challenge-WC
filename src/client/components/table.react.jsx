import React, { Component } from 'react';
const fetchUrl = require('fetch').fetchUrl;

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {countries: []};
  }

  componentDidMount () {
    this.CountryList();
  }

  CountryList () {
    fetchUrl('https://restcountries.eu/rest/v2/all', (err, meta, body) => {
      if (err) {
        throw err;
      }
      console.log('what is body??', JSON.parse(body));
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
