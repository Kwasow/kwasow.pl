import { createListenerMiddleware } from '@reduxjs/toolkit'
import { setupMugMiddleware } from '../features/mug/middleware'

export const listenerMiddleware = createListenerMiddleware()

// Setup middleware from features
setupMugMiddleware(listenerMiddleware)

