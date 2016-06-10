import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Welcome!</h3>
        <p>Select Battle, Leaderboard, or About to get started</p>
        <Link to={"/about"}><button>Learn more</button></Link>
      </div>

    );
  }
}

export default Home;
