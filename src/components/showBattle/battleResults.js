import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerDetails from './playerDetails';
import { fetchBattle } from '../../actions/index';

class BattleResults extends Component {

  componentWillMount = () => {
    this.props.fetchBattle(this.props.id)
  }
  render() {
    if (this.props.currentBattle) {
      const BATTLE = this.props.currentBattle.currentBattle;
      console.log(BATTLE)
      const WINNER = BATTLE.winner_id;
      const LOSER = BATTLE.loser_id;
      const WINNER_SCORE = BATTLE.winner_score;
      const LOSER_SCORE = BATTLE.loser_score;

      return (
        <div id="battle_results" className="col s12">
          <div className="row">
            < PlayerDetails status={"Winner"} login={WINNER} score={WINNER_SCORE} url={"https://github.com/johnrbell"} image={"https://avatars.githubusercontent.com/u/9574394?v=3"}/>
          < PlayerDetails status={"Loser"} login={LOSER} score={LOSER_SCORE} url={"https://github.com/bryanmytko"} image={"https://avatars.githubusercontent.com/u/617982?v=3"}/>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  return { currentBattle: state.currentBattle };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchBattle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleResults);
