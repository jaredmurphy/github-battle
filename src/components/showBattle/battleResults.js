import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerDetails from './playerDetails';
import { fetchBattle } from '../../actions';

class BattleResults extends Component {
    componentDidMount() {
        this.props.fetchBattle(this.props.id)
          .catch(err => console.log('!!!!!!', err));
    }

    render() {
        if (this.props.currentBattle) {
            const { winner_score, loser_score, winner, loser } = this.props.currentBattle;
            return ( 
              <div id='battle_results' className='col s12'>
                <div className='row' >
                  <PlayerDetails 
                    status={ 'Winner' }
                    login={ winner.login }
                    score={ winner_score }
                    url={ `https://github.com/${winner.login}` }
                    image={ winner.avatar_url } /> 
                  
                  <PlayerDetails 
                    status={ 'Loser' }
                    login={ loser.login }
                    score={ loser_score }
                    url={ `https://github.com/${loser.login}` }
                    image={ loser.avatar_url } /> 
                </div> 
              </div>
            );
        } else {
            return <div > Loading... < /div>;
        }
    }
}

function mapStateToProps(state) {
    return {
        currentBattle: state.currentBattle,
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchBattle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleResults);
