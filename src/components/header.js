import React, { Component } from 'react';
import Menu  from '../containers/menu';


export default class Header extends Component {
  render() {
    return (
      <div className="card header">
        <h1 className="card-content"> Open Source Champion </h1>
        <div className="menu-div">
          <Menu />
        </div>
      </div>
    );
  }

}
