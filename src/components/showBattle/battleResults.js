import React, { Component } from 'react';
import { Link } from 'react-router';
import PlayerDetails from './playerDetails';

class BattleResults extends Component {

  render() {
    return (
      <div id="battle_results" className="col s12">

        <div className="row">
          < PlayerDetails status={"Winner"} login={"johnrbell"} score={100} url={"https://github.com/johnrbell"} image={"https://avatars.githubusercontent.com/u/9574394?v=3"}/>
          < PlayerDetails status={"Loser"} login={"bryanmytko"} score={10} url={"https://github.com/bryanmytko"} image={"https://avatars.githubusercontent.com/u/617982?v=3"}/>
        </div>

      </div>
    );
  }
}

export default BattleResults;
