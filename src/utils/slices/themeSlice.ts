import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  isLight: boolean
}

const THEME_ACTION = 'theme'
const ACTION_SWITCH = 'switchTheme'
export const THEME_ACTION_SWITCH = `${THEME_ACTION}/${ACTION_SWITCH}`

const initialState: ThemeState = {
  isLight: false
}

export const themeSlice = createSlice({
  name: THEME_ACTION,
  initialState,
  reducers: {
    [ACTION_SWITCH]: (state) => {
      state.isLight = !state.isLight
    }
  }
})

export const { switchTheme } = themeSlice.actions
export default themeSlice.reducer
