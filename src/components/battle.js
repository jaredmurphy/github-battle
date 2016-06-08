import React, { Component } from 'react';
import Link from 'react-router';
import PlayerOne from './player_one';
import PlayerTwo from './player_two';

export default class Battle extends Component {
  render() {
    return (
      <div className="card battle">
          <PlayerOne />
          <PlayerTwo />
      </div>
    );
  }
}
