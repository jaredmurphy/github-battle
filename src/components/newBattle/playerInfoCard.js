import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class PlayerInfoCard extends Component {

  render() {
    if (!this.props.playerInfo[0]) {
        return <div>Select a user to get started.</div>;
      }
    console.log(this.props.playerInfo[0])
    return (
      <div>
        <img src={ this.props.playerInfo[0].avatar_url } />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    playerInfo: state.playerBattleInfo
  }
}


export default connect(mapStateToProps)(PlayerInfoCard);
