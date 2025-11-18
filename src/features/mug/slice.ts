import { createSlice } from '@reduxjs/toolkit'

interface MugState {
  loading: boolean,
  windowHeight: number,
  windowWidth: number,
  ip: string | undefined,
}

const MUG_ACTION = 'mug'
const ACTION_START_TRACKING = 'startTracking'
export const THEME_ACTION_SWITCH = `${MUG_ACTION}/${ACTION_START_TRACKING}`

const initialState: MugState = {
  loading: false,
  windowHeight: window.screen.height,
  windowWidth: window.screen.width,
  ip: undefined,
}

export const mugSlice = createSlice({
  name: MUG_ACTION,
  initialState,
  reducers: {
    [ACTION_START_TRACKING]: (state) => {
      state.loading = true
    }
  }
})

export const { startTracking } = mugSlice.actions
export default mugSlice.reducer
