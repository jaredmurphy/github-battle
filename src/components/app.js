import React, { Component } from 'react';
import Header from './header.js';
import Home from './home.js'
import Battle from './battle.js';

export default class App extends Component {
  render() {
    return (
      <div>
        < Header />
        < Home />
        //{ this.props.children }
      </div>
    );
  }
}
