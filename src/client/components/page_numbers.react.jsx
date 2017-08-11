import React, { Component } from 'react';

export default class PageNumbers extends Component {
  constructor(props) {
    super(props);
  }

  displayPages() {
    const { countries, currentPage, itemPerPage } = this.props;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item, index) => {
      return <Table countries={item} />
    });
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
          onClick={this.handelClick}
        >
          {num}
        </li>
      );
    });
  }
};