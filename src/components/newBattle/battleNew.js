import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerBattleCard from './playerBattleCard';
import { createBattle } from '../../actions/index';
import Title from '../title';

class BattleNew extends Component {
  battleReady = () => {
    const { playerOneInfo, playerTwoInfo } = this.props.playerInfo;
    if (playerOneInfo && playerTwoInfo) {
      return (
        <button className="waves-effect waves-light btn"
          onClick={() => createBattle(playerOneInfo.id, playerTwoInfo.id) }>
          Battle Now
        </button>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div>
        <Title name="BATTLE" />
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
