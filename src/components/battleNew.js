import React, { Component } from 'react';
import '../App.css'

class BattleNew extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center-align"> BATTLE </h3>

        <div id="players" className="col s6 m6">

          <div className="row">
           <div className="col s12 m6">
             <div className="card">
               <div id="player_one_card" className="card-content player_card">
                 <span className="card-title">Player One</span>
                 <p>Enter a Github username for Player One</p>
                 <br />
                 <input id="player_one_input" className="player_input player_one_input" placeholder="Github username" />
               </div>
               <div className="card-action">
                 <button className="disabled btn player_button player_one_button">Select User</button>
               </div>
             </div>
           </div>

           <div className="col s12 m6">
             <div className="card">
               <div id="player_two_card" className="card-content player_card">
                 <span className="card-title">Player Two</span>
                 <p>Enter a Github username for Player Two</p>
                 <br />
                 <input id="player_two_input"  className="player_input player_two_input disabled_input" placeholder="Github username" />
               </div>
               <div className="card-action">
                 <button className="disabled btn player_button player_two_button">Select User</button>
               </div>
             </div>
           </div>
         </div>

         <button id="battle_button" className="btn waves-effect waves-light red darken-1 center"> BATTLE! </button>
        </div>
      </div>
    );
  }
}

export default BattleNew;
