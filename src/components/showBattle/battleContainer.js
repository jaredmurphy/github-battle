import React from 'react';
import { Link } from 'react-router';
import Title from '../title';
import BattleResults from './battleResults';

const BattleContainer = (props) => {

  // render() {
           // <div id="more_details" className="col s12">
         //   <span className="card-title">Details are not available at this time </span>
         // </div>
    return (
      <div>
        <Title name={"We have a Winner"} />
        <div className="row">
         <div className="col s12">
           <ul className="tabs">
             <li className="tab col s6"><a className="active" href="#battle_results">Results</a></li>
             <li className="tab col s6"><a href="#more_details">More Details</a></li>
           </ul>
         </div>

         <BattleResults id={props.params.id}/>

         <Link to="/battle">
           <button className="waves-effect waves-light btn center-align">
             Play Again
           </button>
         </Link>
       </div>
      </div>
    );
  //}
}

export default BattleContainer;
