import React, { Component } from 'react';


export default class PlayerOne extends Component {
  render() {
    return (
      <div className="card">
        <input placeholder="Enter Username for Player One" />
        <button type="submit"> Submit </button>
      </div>
    );
  }
}
