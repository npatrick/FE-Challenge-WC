import React, { Component } from 'react';

const imgStyle = {
  'width': '6%',
  'height': 'auto',
  'display': 'block'
};

const TableListItem = (props) => {
  console.log('are we firing?', props.name);
  // return (
  //   <tr>
  //     <td><img src={props.flag} style={imgStyle} /></td>
  //     <td>{props.name}</td>
  //     <td>{props.countryCode}</td>
  //     <td>{props.continent}</td>
  //     <td>{props.capital}</td>
  //     <td>{props.callingCodes}</td>
  //     <td>{props.timezones}</td>
  //   </tr>
  // );

  return (
    <h4>{props.name}</h4>
  );
};

export default TableListItem;
