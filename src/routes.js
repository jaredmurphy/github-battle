import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import BattleNew from './components/newBattle/battleNew';
import BattleContainer from './components/showBattle/battleContainer';
import About from './components/about';
import List from './components/battleLists';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={BattleNew} navActive={"battle"}/>
    <Route path="/battle" component={BattleNew} />
    <Route path="/battles/:id" component={BattleContainer} />
    <Route path="/battles/lists/:page" component={List} />
    <Route path="/about" component={About} />
  </Route>
);
