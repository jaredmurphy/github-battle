import React from 'react';
import Title from './title';

const About = () => {
  return (
    <div>
      <Title name="ABOUT" />
      <div className="row">
        <div className="card col s12 m6">
          <div className="card-content">
            <span className="card-title">This Site</span>
            <p>Built with React.js, React-Router, Redux, and Materialize</p>
            <br/>
            <p>Uses a <a href="https://github.com/jaredmurphy/open_source_champ_api">Rails API</a> to create and score Github users</p>
          </div>
          <div className="card-action">
            <a href="https://github.com/jaredmurphy/open-source-champion">Github</a>
          </div>
        </div>
      </div>

    </div>
   )
 }

 export default About;
