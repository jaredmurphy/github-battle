import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
  render() {
    return (
      <ul className="menu-ul">
        <li className="float menu-li card-content">Battle</li>
        <li className="float menu-li card-content">Leaderboard</li>
        <li className="float menu-li card-content">About</li>
      </ul>

    );
  }
}
