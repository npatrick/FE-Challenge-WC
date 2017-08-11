import React, { Component } from 'react';

const PageNumbers = (props) => {
  // page num to render
  const { countries, itemPerPage } = props;
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
            onClick={props.handleClick}
          >
            {num}
          </li>
        );
      })}
    </ul>
  )
};

export default PageNumbers;