import React, { Component } from 'react';

export default class PageNumbers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const liStyle = {
      'marginRight': '0.3em',
      'color': 'blue',
      'userSelect': 'none',
      'cursor': 'pointer'
    };
    const pageNumStyle = {
      'listStyle': 'none',
      'display': 'flex'
    };

    // page num to render
    const { countries, itemPerPage } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countries.length / itemPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <ul id='page-numbers' style={pageNumStyle}>
        {pageNumbers.map(num => {
          return (
            <li 
              style={liStyle}
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