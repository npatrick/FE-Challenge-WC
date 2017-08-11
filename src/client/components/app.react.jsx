import React, { Component } from 'react';
// import Table from './table.react.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {countries: []};
  }

  componentDidMount () {
    this.CountryList();
    console.log('state??', this.state.countries)
  }

  CountryList () {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then( (data) => {
      return this.setState({countries: data})
    })
  }

  // renderCountryList () {
  //   return this.state.countries.map((item, index) => {
  //     return (
  //         <TableListItem
  //           key={item.name}
  //           flag={item.flag}
  //           name={item.name}
  //           countryCode={item.countryCode}
  //           continent={item.continent}
  //           capital={item.capital}
  //           callingCodes={item.callingCodes}
  //           timezones={item.timezones} />
  //     )
  //   });
  // }

  render () {
    return (
      <div>
        <h1>Country List</h1>
        <br />
        {this.state.countries.map(item => <h4>{item.name}</h4>)}
      </div>
    );
  }
}
