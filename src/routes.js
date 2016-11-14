import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Carousel from './components/carousel';
import BattleNew from './components/newBattle/battleNew';
import BattleContainer from './components/showBattle/battleContainer';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Carousel} navActive={"none"} />
    <Route path="battle" component={BattleNew} navActive={"battle"}/>
    <Route path="battle/:id" component={BattleContainer} />
  </Route>

);
