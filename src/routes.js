import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import BattleNew from './components/newBattle/battleNew';
import BattleContainer from './components/showBattle/battleContainer';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={BattleNew} navActive={"battle"}/>
    <Route path="battles/:id" component={BattleContainer} />
  </Route>
);
