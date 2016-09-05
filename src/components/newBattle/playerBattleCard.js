import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/index';
import SearchBar from './searchBar';



class PlayerBattleCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerLogin: '',
      playerAvatarUrl: ''
    };

  }

  render() {
    return (
       <div className="col xs12 m6">
         <div className="card">

           <div className="card-content player_card">
             <span className="card-title">{ this.props.player }</span>
             <p>Enter a Github username for { this.props.player }</p>
             <br />
             < SearchBar player={ this.props.player } fetchUser={ this.props.fetchUser }/>
           </div>

           <div className="card-action">
             <button className="disabled btn player_button player_one_button">Select User </button>
           </div>

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
