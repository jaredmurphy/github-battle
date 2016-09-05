import React, { Component } from 'react';
import _ from 'lodash';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

  }

  playerSearch(searchTerm) {
    this.setState({ searchTerm });
    this.props.fetchUser(this.state.searchTerm);
    //console.log(this.props);
    // this.setState({
    //   playerLogin: data.PromiseValue.payload.data.login,
    //   playerAvatarUrl: data.PromiseValue.payload.data.avatar_url
    // })
    //console.log(searchTerm)
    //this.props.onSearchTermChange(searchTerm);
  }

  render() {

    const onInputChange = _.debounce((username) => { this.playerSearch(username)}, 300)
    return (
      <input id={`${ this.props.player }_input`} className="player_input" placeholder="Github username"
        val={ this.state.searchTerm }
        onChange={event => onInputChange(event.target.value)}
      />
    );
  }
}

export default SearchBar;
