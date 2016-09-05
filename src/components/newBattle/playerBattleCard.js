import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/index';
import SearchBar from './searchBar';
import PlayerInfoCard from './playerInfoCard';



class PlayerBattleCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerLogin: '',
      playerAvatarUrl: ''
    };
  }

  renderPlayer() {
    console.log(this.props.playerBattleInfo)
    return this.props.playerBattleInfo;
  }

  render() {
    console.log(" props there? ",this.props.playerBattleInfo)
    return (
       <div className="col xs12 m6">
         <div className="card">

           <div className="card-content player_card">
             <span className="card-title">{ this.props.player }</span>
             <p>Enter a Github username for { this.props.player }</p>
             <br />
             < SearchBar player={ this.props.player } fetchUser={ this.props.fetchUser }/>
           </div>

           < PlayerInfoCard />

         </div>
       </div>

    );
  }



}


const mapDispatchToProps = (dispatch) => {
  console.log(bindActionCreators({ fetchUser }, dispatch))
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerBattleCard);
