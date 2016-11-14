import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerInfoCard extends Component {
  displayResponse = (Data) => {
    var login, url, messageClass;
      if (!Data) {
        login = "Oops! Lets try that again"; 
        url = ""; 
        messageClass = "red-text";
      } else {
        login = Data.login; 
        url = Data.avatar_url; 
        messageClass = "";
      }
      return (
        <div>
          <h5 className={messageClass}>{ login }</h5>
          <img src={ url } alt="" style={ { maxWidth: "200px"}  }/>
        </div>
      );
  } // ends displayResponse

  render() {
    const Player = this.props.player === "playerOne" ? "playerOneInfo" : "playerTwoInfo";
    const PlayerInfo = this.props.playerInfo[Player];
    if (!PlayerInfo) {
        return <div>Select a Player</div>;
      }
    const Data = PlayerInfo[Player];
    return (
      <div>
        { this.displayResponse(Data) }
      </div>
    )
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
