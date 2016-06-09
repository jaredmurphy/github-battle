import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h3>Welcome!</h3>
        <p>Select Battle, Leaderboard, or About to get started</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>

    );
  }
}

export default Home;
