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
var Sample = require('../functions/sample.js');

var githubQuotes = ['The trademark mascot of GitHub is Octocat, an anthropomorphized cat with octopus limbs, done in a manga style.', 'GitHub, Inc. was originally known as Logical Awesome', 'The shortcut t + w will open a fuzzy search on any Github repository'];


var Home = React.createClass({
  render: function() {
    return (
      <div style={contentDiv} className='jumbotron col-sm-12 text-center'>
        <h1> Open Source Champion</h1>
        <p style={center}>
          {Sample(githubQuotes)}
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
