import React, { Component } from 'react';
import TableListItem from './table_list_item.react.jsx';

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  // render () {
  //   const tableStyle = {
  //     'width': '100%',
  //     'cellspacing': '0'
  //   };
  //   return (
  //     <table style={tableStyle}>
  //       <thead>
  //         <tr>
  //           <th>Flag</th>
  //           <th>Name</th>
  //           <th>Country Code</th>
  //           <th>Continent</th>
  //           <th>Capital</th>
  //           <th>Calling Codes</th>
  //           <th>Timezones</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {this.renderCountryList()}
  //       </tbody>
  //     </table>
  //   );
  // }
  render () {
    return (
      <div>
        {this.state.countries.map((item, index) => {
          console.log('CMOONNNN', item.name);
          return (
            <h4>{item.name}</h4>
          )
        })}
      </div>
    )
  }
}
