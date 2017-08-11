import React, { Component } from 'react';
import Table from './table.react.jsx';
import PageNumbers from './page_numbers.react.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      currentPage: 1,
      itemPerPage: 20
    };
  }

  componentWillMount () {
    this.CountryList();
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render () {
    // page logic
    const { countries, currentPage, itemPerPage } = this.state;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

    // filtering or normal rendering of pages
    let toRender = this.state.countries;
    if (this.state.filter) {
      toRender = this.state.countries.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()));
      return (
        <div>
          <h1>Country List</h1>
          <br />
          <span>Search by Country Name: </span>
          <input type='text' onChange={this.filter.bind(this)} />
          <Table countries={toRender} />
        </div>
      )
    } else {
      return (
        <div>
          <h1>Country List</h1>
          <br />
          <span>Search by Country Name: </span>
          <input type='text' onChange={this.filter.bind(this)} />
          <Table countries={currentItems} />
          <PageNumbers 
            countries={this.state.countries}
            itemPerPage={this.state.itemPerPage}
            handleClick={this.handleClick} />
        </div>
      );
    }
  }
}
