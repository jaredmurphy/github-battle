import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayerOne, fetchPlayerTwo } from '../../actions/index';
import SearchBar from './searchBar';
import PlayerOneInfoCard from './playerOneInfoCard';
import PlayerTwoInfoCard from './playerTwoInfoCard';



class PlayerBattleCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const PlayerCard = this.props.player === "playerOne" ? PlayerOneInfoCard : PlayerTwoInfoCard;
    console.log(this.props)
    return (
       <div className="col xs12 m6">
         <div className="card">

           <div className="card-content player_card">
             <span className="card-title">{ this.props.player }</span>
             <p>Enter a Github username for { this.props.player }</p>
             <br />
             < SearchBar player={ this.props.player }
             fetchPlayer={ this.props.player === "playerOne" ? this.props.fetchPlayerOne : this.props.fetchPlayerTwo }/>
           </div>

           < PlayerCard />

         </div>
       </div>

    );
  }



}


const mapDispatchToProps = (dispatch) => {
  //console.log(bindActionCreators({ fetchPlayerOne }, dispatch))
  return bindActionCreators({ fetchPlayerOne, fetchPlayerTwo }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerBattleCard);
