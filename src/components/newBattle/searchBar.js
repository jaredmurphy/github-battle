import React, { Component } from 'react';
import _ from 'lodash';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ''
    };
  }

  playerSearch(searchTerm) {
    this.setState({ searchTerm });
    this.props.fetchPlayer(this.state.searchTerm, this.props.player);
  }

  render() {
    const onInputChange = _.debounce((username) => {
      if (username !== '') {
      this.playerSearch(username)
      }
    }, 400);

    return (
      <input id={`${ this.props.player }_input`} className="player_input" placeholder="Github username"
        val={ this.state.searchTerm }
        onChange={event => onInputChange(event.target.value)}
      />
    );
  }
}

export default SearchBar;
