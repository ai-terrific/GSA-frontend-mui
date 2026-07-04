// ** Redux Imports
import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth'
import step from './step'
import submission from './submission'

const reducer = combineReducers({
  auth,
  step,
  submission
})

export default reducer
