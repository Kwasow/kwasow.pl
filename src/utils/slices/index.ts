import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'

export const rootReducer = combineReducers({
  theme: themeReducer
})
