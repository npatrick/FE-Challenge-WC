import React, { Component } from 'react';

const imgStyle = {
  'display': 'block'
};

const TableListItem = (props) => {
  return (
    <tr>
      <td><img src={props.flag} width={'6%'} style={imgStyle} /></td>
      <td>{props.name}</td>
      <td>{props.countryCode}</td>
      <td>{props.continent}</td>
      <td>{props.capital}</td>
      <td>{props.callingCodes}</td>
      <td>{props.timezones}</td>
    </tr>
  );
};

export default TableListItem;
