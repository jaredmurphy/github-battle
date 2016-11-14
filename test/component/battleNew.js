import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import createComponent from 'react-unit';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

import BattleNew from '../../src/components/newBattle/BattleNew';

test('--- React Component BattleNew ---', (t) => {
  // Shallow rendering
  const component = createComponent.shallow(< BattleNew /> );

  // Test rendered output
  const renderer = createRenderer();
  renderer.render(< BattleNew />);
  const result = renderer.getRenderOutput();
  console.log(result)
  //t.jsxEquals(result, )

  t.end();
});
