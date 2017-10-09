import { handleActions } from 'redux-actions'

import { MODALS_DEQUEUE_ALL, MODALS_DEQUEUE_ONE, MODALS_ENQUEUE_ONE } from 'services/redux/types'

const initialState = []

const modals = handleActions({
  [MODALS_DEQUEUE_ALL]: () => initialState,
  [MODALS_DEQUEUE_ONE]: (state) => state.slice(1),
  // TODO do some sort of modal config object verification here
  [MODALS_ENQUEUE_ONE]: (state, { payload }) => [...state, payload],
}, initialState)

export default modals
