import React, { Component } from 'react';
import moment from 'moment';


class BattleCard extends Component {
  renderPlayer(position, data, score) {
    const align = position === "loser" ? "right-align" : ""; 
    return (
        <div className={`col s4 ${align}`} >
          <a href={`https://github.com/${data.login}`} >
            <img style={{maxWidth: '120px'}} src={data.avatar_url} alt="winner" />
            <p className="white-text" style={{marginTop: 0, marginBottom: '2px'}}> {data.login } </p>
          </a>
          <h5 className="white-text" style={{marginTop: 0}}> { score } </h5>
        </div>
     );
  } render() {
    const { winner_score, loser_score, winner, loser, created_at } = this.props.battle;
    return (
      <div className="col s12">
        <div className="card-panel teal row" style={{paddingBottom: 0}}>
          { this.renderPlayer("winner", winner, winner_score) }
          <div className="col s4">
            <h4 className="white-text center-align"> { winner.login } wins! </h4>
            <p className="center-align" style={{color: "#ffab40"}}>
              { moment(created_at).startOf('minut').fromNow() }
            </p>
          </div>
          { this.renderPlayer("loser", loser, loser_score) }
        </div>
       </div>
     );
  }
}

export default BattleCard;
