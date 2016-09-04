import React, { Component } from 'react';
import '../../App.css'

class PlayerBattleCard extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  render() {
    return (
       <div className="col xs12 m6">
         <div className="card">

           <div className="card-content player_card">
             <span className="card-title">Player One</span>
             <p>Enter a Github username for Player One</p>
             <br />
             <input id="player_one_input" className="player_input player_one_input" placeholder="Github username"
               val={ this.state.searchTerm }
               onChange={event => this.onInputChange(event.target.value)}
             />
           </div>

           <div className="card-action">
             <button className="disabled btn player_button player_one_button">Select User </button>
           </div>

         </div>
       </div>

    );
  }
  onInputChange(searchTerm) {
    this.setState({ searchTerm });
    console.log(searchTerm)
    //this.props.onSearchTermChange(searchTerm);
  }
}

export default PlayerBattleCard;
