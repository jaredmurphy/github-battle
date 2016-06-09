import React, { Component } from 'react';
import Menu  from '../containers/menu';
import { Button } from 'react-bootstrap';


export default class Header extends Component {
  render() {
    return (
      <div className="">
        <h1 className=""> Open Source Champion </h1>
        <Button bsStyle="success">Success</Button>
      </div>
    );
  }

}
