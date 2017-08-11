import React, { Component } from 'react';
import TableListItem from './table_list_item.react.jsx';

export default class Table extends Component {
  constructor(props) {
    super(props);
  }
  renderCountryList () {
    return this.props.countries.map((item, index) => {
      let callingCodes,
          timezones,
          subregion;
      // conditional statements for empty fields
      if (item.callingCodes.length > 1) {
        callingCodes = item.callingCodes.join(', ');
      } else if (item.callingCodes.length < 1) {
        callingCodes = 'N/A'
      } else {
        callingCodes = item.callingCodes;
      }
      if (item.timezones.length > 1) {
        timezones = item.timezones.join(', ');
      } else {
        timezones = item.timezones;
      }
      if (typeof item.subregion === 'string' && item.subregion.length < 1) {
        subregion = 'N/A'
      } else {
        subregion = item.subregion
      }
      // passing data to its child
      return (
          <TableListItem
            key={item.name}
            flag={item.flag}
            name={item.name}
            countryCode={item.alpha2Code}
            continent={subregion}
            capital={item.capital}
            callingCodes={callingCodes}
            timezones={timezones} />
      )
    });
  }

  render () {
    return (
      <table className='table-container'>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Country Code</th>
            <th>Continent</th>
            <th>Capital</th>
            <th>Calling Codes</th>
            <th>Timezones</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCountryList()}
        </tbody>
      </table>
    );
  }
}
