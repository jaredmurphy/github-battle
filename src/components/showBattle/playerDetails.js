import React, { Component } from 'react';
//import { Link } from 'react-router';


class PlayerDetails extends Component {

  render() {
    return (
      <div className="card col s12 m6">
        <div id="winner_card" className="card-content player_card">
          <h4>{ this.props.status }: { this.props.login }</h4>
          <p> Score: { this.props.score } </p>
          <br />
          <img className="select_user" src={ this.props.image } role="presentation" style={ { maxWidth: "200px"} } />
        </div>

        <div className="card-action">
          <a href={ this.props.url }>Github</a>
        </div>

      </div>
    );
  }
}

export default PlayerDetails;
