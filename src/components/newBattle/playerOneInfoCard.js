import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class PlayerInfoCard extends Component {

  render() {
    if (!this.props.playerOne) {
        return <div>Player One Info Card.</div>;
      }
    console.log("p1", this.props.playerOne.playerOneInfo)
    return (
      <div>
        <img src={ this.props.playerOne.playerOneInfo.avatar_url } alt=""/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    playerOne: state.playerOneInfo
  }
}


export default connect(mapStateToProps)(PlayerInfoCard);
