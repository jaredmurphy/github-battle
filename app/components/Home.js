var React = require('react');
var center = require('../styles').center;
var marginZero = require('../styles').marginZero;
var inlineBlock = require('../styles').inlineBlock;
var transparentBg = require('../styles').transparentBg;
var contentDiv = require('../styles').contentDiv;
var greyBg = require('../styles').greyBg;
var title = require('../styles').title;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div style={contentDiv} className='jumbotron col-sm-12 text-center'>
        <h1> Open Source Champion</h1>
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
