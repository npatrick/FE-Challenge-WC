import React, { Component } from 'react';

const TableListItem = (props) => {
  return (
    <tr>
      <td><img className='flag-pics' src={props.flag} width={'60%'} /></td>
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
