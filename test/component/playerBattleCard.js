import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import createComponent from 'react-unit';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

import PlayerBattleCard from '../../src/components/newBattle/playerBattleCard';

test('--- React Component PlayerBattleCard ---', (t) => {
  // Shallow rendering
  const component = createComponent.shallow(< PlayerBattleCard /> );

  // Test rendered output
  const renderer = createRenderer();
  renderer.render(< PlayerBattleCard />);
  const result = renderer.getRenderOutput();
  console.log(result)
  result.
  // t.jsxEquals(result,
  // );

  t.end();
});
