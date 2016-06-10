import React, { Component } from 'react';
import Menu  from '../containers/menu';


export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-card card">
          <h1>Open Source Champion</h1>
          <Menu />
        </div>

      </div>


    );
  }

}
