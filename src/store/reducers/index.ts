// ** Redux Imports
import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth'
import step from './step'

const reducer = combineReducers({
  auth,
  step
})

export default reducer
