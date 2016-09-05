import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayerOne, fetchPlayerTwo } from '../../actions/index';
import SearchBar from './searchBar';
import PlayerInfoCard from './playerInfoCard';

class PlayerBattleCard extends Component {

  render() {
    const Player = this.props.player;
    const FetchMethod = Player === "playerOne" ? this.props.fetchPlayerOne : this.props.fetchPlayerTwo;

    return (
       <div className="col xs12 m6">
         <div className="card">

           <div className="card-content player_card">
             <span className="card-title">{ Player }</span>
             <p>Enter a Github username for { Player }</p>
             <br />
             < SearchBar player={ Player } fetchPlayer={ FetchMethod }/>
           </div>

           < PlayerInfoCard player={ Player }/>

         </div>
       </div>

    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPlayerOne, fetchPlayerTwo }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerBattleCard);
