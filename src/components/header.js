import React, { Component } from 'react';
import Menu  from '../containers/menu';
import { PageHeader } from 'react-bootstrap';


export default class Header extends Component {
  render() {
    return (
      <PageHeader className="header-card card">
        <h1>Open Source Champion</h1>
        <Menu />
      </PageHeader>
    );
  }

}
