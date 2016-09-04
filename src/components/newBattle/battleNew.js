import React, { Component } from 'react';
import PlayerBattleCard from './playerBattleCard';
import '../../App.css';

class BattleNew extends Component {


  render() {
    return (
      <div className="container">
        <h3 className="center-align"> BATTLE </h3>

        <div id="players" className="col s6 m6 row">
          < PlayerBattleCard />
          < PlayerBattleCard />
        </div>

      </div>
    );
  }
}

export default BattleNew;
