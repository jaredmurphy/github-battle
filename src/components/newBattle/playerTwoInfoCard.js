import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class PlayerInfoCard extends Component {

  render() {
    if (!this.props.playerTwo) {
        return <div>Player Two Info Card.</div>;
      }
    console.log("p2", this.props.playerTwo.playerTwoInfo);
    return (
      <div>
        <img src={ this.props.playerTwo.playerTwoInfo.avatar_url } alt=""/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    playerTwo: state.playerTwoInfo
  }
}


export default connect(mapStateToProps)(PlayerInfoCard);
