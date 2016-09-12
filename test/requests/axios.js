import expect from 'expect';
import * as actions from '../../src/actions/index';

describe('actions', () => {
  it('should create an action to get player info', () => {
    const text = 'FETCH_PLAYER_ONE'
    const expectedAction = {
      type: actions.FETCH_PLAYER_ONE,
      text
    }
    expect(actions.FETCH_PLAYER(text)).toEqual(expectedAction)
  })
})
