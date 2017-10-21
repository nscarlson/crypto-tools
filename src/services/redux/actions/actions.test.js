import * as lists from './lists'
import * as modals from './modals'
import * as users from './users'

import * as actions from './actions'

describe('actions', () => {
  const testActions = {
    ...lists,
    ...modals,
    ...users,
  }

  for (const type in testActions) {
    it(`${type} is exported`, () => {
      expect(testActions[type]).toBe(actions[type])
    })
  }
})
