import React, { Component } from 'react';
import TableListItem from './table_list_item.react.jsx';

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  renderCountryList () {
    return this.props.countries.map((item, index) => {
      let format;
      if (item.callingCodes.length > 1) {
        format = item.callingCodes.join(', ');
      } else {
        format = item.callingCodes;
      }
      if (item.timezones.length > 1) {
        format = item.timezones.join(', ');
      } else {
        format = item.timezones;
      }
      return (
          <TableListItem
            key={item.name}
            flag={item.flag}
            name={item.name}
            countryCode={item.alpha2Code}
            continent={item.continent}
            capital={item.capital}
            callingCodes={format}
            timezones={format} />
      )
    });
  }

  render () {
    const tableStyle = {
      'width': '100%'
    };
    return (
      <table style={tableStyle}>
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
