import { MODALS_DEQUEUE_ALL } from 'services/redux/types'

import modalsDequeueAll from './modalsDequeueAll'

describe('modalsDequeueAll action', () => {
  it('returns the correc type', () => {
    expect(modalsDequeueAll().type).toBe(MODALS_DEQUEUE_ALL)
  })
})
