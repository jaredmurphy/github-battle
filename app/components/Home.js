var React = require('react');
var center = require('../styles').center;
var marginZero = require('../styles').marginZero;
var inlineBlock = require('../styles').inlineBlock;
var greyBg = require('../styles').greyBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div style={greyBg}> 
        <h1 style={center} >Open Source Champion</h1>
        <p style={center}>
          What even is a jQuery?
        </p>
        <div style={inlineBlock}>
          <Link to='/playerOne'>
            <button type='button' className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' >
              Get Started
            </button>
          </Link>
        </div>
      
      </div>
      )
  }
});

module.exports = Home;
