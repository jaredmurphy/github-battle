import React, { Component } from 'react';
import { connect} from 'react-redux';

class PlayerInfoCard extends Component {

  render() {
    const Player = this.props.player === "playerOne" ? "playerOneInfo" : "playerTwoInfo";
    const PlayerInfo = this.props.playerInfo[Player];
    if (!PlayerInfo) {
        return <div>Player One Info Card.</div>;
      }
    const Data = PlayerInfo[Player];
    console.log("p1", Data)
    return (
      <div>
        <img src={ Data.avatar_url } alt=""/>
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


export default connect(mapStateToProps)(PlayerInfoCard);
