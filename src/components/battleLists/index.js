import React, { Component } from 'react';
import Title from '../title';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecentBattles } from '../../actions';
import BattleCard from './BattleCard';

class BattleList extends Component {
    componentWillMount(){
      this.props.fetchRecentBattles()
        .catch(err => console.log(`!!!!! ERROR ${err}`));
    }

    renderBattles(){
      if (!this.props.recent){
        return (
          <div>...Loading</div>
        );
      }

      return this.props.recent.map(battle => {
        return (
          <BattleCard battle={battle} key={battle.id} />
         );
      });
    }
    
    render() {
      const page = this.props.params.page.replace(/\b\w/g, letter => letter.toUpperCase());
      return (
        <div>
          <Title name={ `${page} Battles` } />

            <div className="row">
              { this.renderBattles() }
             </div>

        </div>
      );
    }
}


function mapStateToProps(state) {
    return {
        recent: state.recentBattles
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchRecentBattles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleList);

