import { handleActions } from 'redux-actions'

import { LISTS_ADD_BOOK } from 'services/redux/types'

const initialState = {
  new: {
    books: [],
  },
}

const lists = handleActions({
  [LISTS_ADD_BOOK]: (state, { payload: { key, book } }) => ({
    ...state,
    [key]: {
      ...state[key],
      books: [
        ...((state[key] || {}).books || {}),
        book,
      ],
    },
  }),
}, initialState)

export { initialState }
export default lists
