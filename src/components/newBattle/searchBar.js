import React, { Component } from 'react';
import '../App.css'

class SearchBar extends Component {
  render() {
    return (
      <input id="player_one_input" className="player_input player_one_input" placeholder="Github username" />
    );
  }
}

export default SearchBar
