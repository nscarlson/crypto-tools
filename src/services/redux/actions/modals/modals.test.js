import { default as modalsDequeueAll } from './modalsDequeueAll'
import { default as modalsDequeueOne } from './modalsDequeueOne'
import { default as modalsEnqueueOne } from './modalsEnqueueOne'

import * as modals from './modals'

describe('modals actions', () => {
  const actions = {
    modalsDequeueAll,
    modalsDequeueOne,
    modalsEnqueueOne,
  }

  for (const type in modals) {
    it(`${type} is exported`, () => {
      expect(actions[type]).toBe(actions[type])
    })
  }
})
