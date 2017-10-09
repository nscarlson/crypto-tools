import { MODALS_ENQUEUE_ONE } from 'services/redux/types'

import modalsEnqueueOne from './modalsEnqueueOne'

describe('modalsEnqueueOne action', () => {
  it('returns the correc type', () => {
    expect(modalsEnqueueOne().type).toBe(MODALS_ENQUEUE_ONE)
  })
})
