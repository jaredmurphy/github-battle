var React = require('react');
var PropTypes = React.PropTypes;
var contentDiv = require('../styles').contentDiv;

function Prompt(props){
  return (
      <div style={contentDiv}>
        <h1>{props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
            <div className="input-field col s6">
              <input 
                className="mdl-textfield__input" 
                placeholder="Github Username" 
                onChange={props.onUpdateUser} 
                value={props.username} 
                type="text" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button type='submit' className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary' >
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}


module.exports = Prompt;

