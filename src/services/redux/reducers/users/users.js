import * as types from 'services/redux/types'

const initialState = {}

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_SESSION_SUCCESS:
      return action.payload
    default:
      return state
  }
}
