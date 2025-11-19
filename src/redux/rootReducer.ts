import { combineReducers } from '@reduxjs/toolkit'
import mugReducer from '../features/mug/slice'
import themeReducer from '../features/theme/slice'

export const rootReducer = combineReducers({
  mug: mugReducer,
  theme: themeReducer,
})
