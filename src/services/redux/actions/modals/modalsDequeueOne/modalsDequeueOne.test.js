import { MODALS_DEQUEUE_ONE } from 'services/redux/types'

import modalsDequeueOne from './modalsDequeueOne'

describe('modalsDequeueOne action', () => {
  it('returns the correc type', () => {
    expect(modalsDequeueOne().type).toBe(MODALS_DEQUEUE_ONE)
  })
})
