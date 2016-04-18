var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');


function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p>LOADING</p>
    : <div style={styles.contentDiv}>
        <h1>Confirm Players</h1>
        <div>
            <UserDetailsWrapper header='Player One'>
              <UserDetails info={props.playersInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header='Player Two'>
              <UserDetails info={props.playersInfo[1]} />
            </UserDetailsWrapper>
        </div>
        <div>
            <div style={styles.space}>
              <button type="button"className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary' onClick={props.onInitiateBattle}>
                  Initiate Battle 
              </button>
            </div>
            <div style={styles.space}>
              <Link to="/playerOne">
                <button type="button" className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'> 
                  Reselect Players 
                </button>
              </Link>
            </div>
        </div>  
      </div>
}


ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle; 
