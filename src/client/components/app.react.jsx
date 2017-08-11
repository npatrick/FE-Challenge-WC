import React, { Component } from 'react';
import Table from './table.react.jsx';

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
    console.log('triggered!!');
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render () {
    // stylenum
    const listStyle = {
      'marginRight': '0.3em',
      'userSelect': 'none',
      'cursor': 'pointer'
    };

    // displaying pages
    const { countries, currentPage, itemPerPage } = this.state;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);
    // console.log('currentItems before mapping??', currentItems);
    // const renderItems = currentItems.map((item, index) => {
    //   return <Table key={index} countries={item} />
    // });

    // page nums
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countries.length / itemPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(num => {
      return (
        <li
          key={num}
          id={num}
          onClick={this.handleClick}
          style={listStyle}
        >
          {num}
        </li>
      );
    });
    // filtering
    let toRender = this.state.countries;
    if (this.state.filter) {
      toRender = this.state.countries.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    }
    //     <span>Search by Country Name: </span>
    // <input type='text' onChange={this.filter.bind(this)} />
    // <Table countries={toRender} />

    const pageNumStyle = {
      'listStyle': 'none',
      'display': 'flex'
    }
    return (
      <div>
        <h1>Country List</h1>
        <br />
        <Table countries={currentItems} />
        <ul id='page-numbers' style={pageNumStyle}>
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}
