import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { listenerMiddleware } from './setupMiddleware'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
