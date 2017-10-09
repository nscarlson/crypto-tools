import { createAction } from 'redux-actions'

import { LISTS_ADD_BOOK } from 'services/redux/types'

const listsAddBook = createAction(LISTS_ADD_BOOK)

export default listsAddBook
