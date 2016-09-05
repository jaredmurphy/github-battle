import React, { Component } from 'react';
import PlayerBattleCard from './playerBattleCard';
import Title from '../title';

class BattleNew extends Component {

  render() {
    return (
      <div>
        < Title name={"BATTLE"} />
        <div id="players" className="col s6 m6 row center-align">
          < PlayerBattleCard player={"playerOne"} />
          < PlayerBattleCard player={"playerTwo"} />
        </div>
      </div>
    );
  }
}

export default BattleNew;
