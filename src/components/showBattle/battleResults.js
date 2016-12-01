import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerDetails from './playerDetails';
import { fetchBattle } from '../../actions/index';
import { fetchPlayerById } from '../../actions/index';

class BattleResults extends Component {

  componentWillMount(){
    this.props.fetchBattle(this.props.id).then(() => {
      this.props.fetchPlayerById(this.props.currentBattle.currentBattle.winner_id, 'winner').then(() => {
        this.props.fetchPlayerById(this.props.currentBattle.currentBattle.loser_id, 'loser')
      });
    });
  }

  render() {
    if (this.props.currentBattle && this.props.winner && this.props.loser) {
      const { currentBattle, winner_score, loser_score } = this.props.currentBattle.currentBattle;
      const { winner } = this.props.winner;
      const { loser } = this.props.loser;

      console.log('there is a current battle', winner);

      return (
        <div id="battle_results" className="col s12">
          <div className="row">
            <PlayerDetails
              status={"Winner"}
              login={winner.login}
              score={winner_score}
              url={`https://github.com/${winner.login}`}
              image={winner.avatar_url}
            />
            <PlayerDetails
              status={"Loser"}
              login={loser.login}
              score={loser_score}
              url={`https://github.com/${loser.login}`}
              image={loser.avatar_url}
            />
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return { currentBattle: state.currentBattle, winner: state.winner, loser: state.loser };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchBattle, fetchPlayerById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleResults);
