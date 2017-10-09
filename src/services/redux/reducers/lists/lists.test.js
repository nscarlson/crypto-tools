import lists, { initialState } from './lists'

import { LISTS_ADD_BOOK } from 'services/redux/types'

describe('lists reducer', () => {
  it('returns the correct initialState', () => {
    expect(lists(undefined, { type: 'FAKE_ACTION' })).toBe(initialState)
  })

  it('handles the LISTS_ADD_BOOK action', () => {
    const action = {
      payload: {
        book: {},
        key: `${Math.random()}`,
      },
      type: LISTS_ADD_BOOK,
    }

    const { book, key } = action.payload

    expect(lists(undefined, action)).toEqual({
      ...initialState,
      [key]: {
        books: [
          book,
        ],
      },
    })
  })
})
