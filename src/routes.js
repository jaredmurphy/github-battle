import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Battle from './components/battle';
import About from './components/about';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/batte" component={Battle} />
    <Route path="/about" component={About} />
  </Route>
);
