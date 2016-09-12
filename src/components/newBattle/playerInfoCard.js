import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerInfoCard extends Component {
  render() {
    const Player = this.props.player === "playerOne" ? "playerOneInfo" : "playerTwoInfo";
    const PlayerInfo = this.props.playerInfo[Player];
    if (!PlayerInfo) {
        return <div>Select a Player</div>;
      }
    const Data = PlayerInfo[Player];
    return (
      <div>
        <h5>{ Data.login }</h5>
        <img src={ Data.avatar_url } alt="" style={ { maxWidth: "200px"}  }/>
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
