import { createSlice } from '@reduxjs/toolkit'

interface MugState {
  loading: boolean,
  ip: string | undefined,
  windowHeight: number | undefined,
  windowWidth: number | undefined,
  browser: string | undefined,
  os: string | undefined,
  device: string | undefined,
}

const initialState: MugState = {
  loading: false,
  ip: undefined,
  windowHeight: undefined,
  windowWidth: undefined,
  browser: undefined,
  os: undefined,
  device: undefined,
}

export const mugSlice = createSlice({
  name: 'mug',
  initialState,
  reducers: {
    ['startTracking']: (state) => {
      state.loading = true
    },
    ['finishTracking']: (state) => {
      state.loading = false
    },
    ['setIp']: (state, action) => {
      state.ip = action.payload
    },
    ['setDimensions']: (state, action) => {
      const [height, width] = action.payload
      
      state.windowWidth = width
      state.windowHeight = height
    },
    ['setBrowser']: (state, action) => {
      state.browser = action.payload
    },
    ['setOs']: (state, action) => {
      state.os = action.payload
    },
    ['setDevice']: (state, action) => {
      state.device = action.payload
    },
  }
})

export const {
  finishTracking,
  setBrowser,
  setDevice,
  setDimensions,
  setIp,
  setOs,
  startTracking
} = mugSlice.actions
export default mugSlice.reducer
