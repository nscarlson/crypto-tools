import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import lists from './lists'
import modals from './modals'
import users from './users'

export default combineReducers({
  form,
  lists,
  modals,
  routing,
  users,
})
