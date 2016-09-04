import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Carousel from './components/carousel';
import BattleNew from './components/battleNew';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={Carousel} />
    <Route path="battle" component={BattleNew} />
  </Route>

);
