import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerBattleCard from './playerBattleCard';
import { createBattle } from '../../actions/index';
import Title from '../title';

class BattleNew extends Component {

  battleReady = () => {
    if (this.props.playerInfo.playerOneInfo && this.props.playerInfo.playerTwoInfo) {
      if (this.props.playerInfo.playerOneInfo.playerOneInfo && this.props.playerInfo.playerTwoInfo.playerTwoInfo) {
        console.log("BattleReady", this.props.playerInfo.playerOneInfo, this.props.playerInfo.playerTwoInfo);

        return (
          <button className="waves-effect waves-light btn"
            onClick={() => {createBattle(this.props.playerInfo.playerOneInfo.playerOneInfo.id, this.props.playerInfo.playerTwoInfo.playerTwoInfo.id)}}>
            Battle Now
          </button>
        );
      } else {
        return <div></div>;
      }
    }
  }

  render() {
    return (
      <div>
        <Title name={"BATTLE"} />
        <div id="players" className="col s6 m6 row center-align">
          <PlayerBattleCard player={"playerOne"} />
          <PlayerBattleCard player={"playerTwo"} />
          <div> { this.battleReady() } </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerInfo: {
      playerOneInfo: state.playerOneInfo,
      playerTwoInfo: state.playerTwoInfo
    }
  }
}

export default connect(mapStateToProps)(BattleNew);
