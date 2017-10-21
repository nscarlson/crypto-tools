import modals from './modals'

describe('modals reducer', () => {
  it('returns an empty array by default', () => {
    expect(modals(undefined, { type: 'FAKE_ACTION' })).toEqual([])
  })

  it('handles the MODALS_DEQUEUE_ALL action', () => {
    const action = { type: 'MODALS_DEQUEUE_ALL' }

    expect(modals([{}, {}], action)).toEqual([])
  })

  it('handles the MODALS_DEQUEUE_ONE action', () => {
    const action = {
      type: 'MODALS_DEQUEUE_ONE',
    }

    expect(modals([{}, {}], action)).toEqual([{}])
  })

  it('handles the MODALS_ENQUEUE_ONE action', () => {
    const action = {
      payload: {},
      type: 'MODALS_ENQUEUE_ONE',
    }

    expect(modals(undefined, action)).toEqual([action.payload])
  })
})
