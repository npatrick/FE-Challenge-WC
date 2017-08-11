import React, { Component } from 'react';

export default class PageNumbers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // page num to render
    const { countries, itemPerPage } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countries.length / itemPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <ul id='page-numbers'>
        {pageNumbers.map(num => {
          return (
            <li 
              key={num}
              id={num}
              onClick={this.props.handleClick}
            >
              {num}
            </li>
          );
        })}
      </ul>
    )
  }
};