import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <h3 className="center-align"> { this.props.name } </h3>
    );
  }
}

export default Title;
