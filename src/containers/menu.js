import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
  render() {
    return (
      <ul>
        <li><Link to={'/battle'}>Battle</Link></li>
        <li><Link to={'/leaderboard'}>Leaderboard</Link></li>
        <li><Link to={'/about'}>Battle</Link></li>
      </ul>
    );
  }
}
