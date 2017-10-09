import { LISTS_ADD_BOOK } from 'services/redux/types'

import listsAddBook from './listsAddBook'

describe('listsAddBook action', () => {
  it('returns the correc type', () => {
    expect(listsAddBook().type).toBe(LISTS_ADD_BOOK)
  })
})
