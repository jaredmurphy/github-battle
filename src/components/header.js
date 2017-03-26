import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">OSC</Link>
          <Link to="#mobile-demo" data-activates="mobile-demo" className="navbar_item button-collapse"><i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            <li className="navbar_item" ><Link to="/battle">Battle</Link></li>
            <li className="navbar_item" ><Link to="/battles/lists/recent">Recent Battles</Link></li>
            <li className="navbar_item" ><Link to="/about">About</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/battle">Battle</Link></li>
            <li><Link to="/battles/lists/recent">Recent Battles</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
