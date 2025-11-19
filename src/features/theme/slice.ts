import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  isLight: boolean
}

const initialState: ThemeState = {
  isLight: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    ['switchTheme']: (state) => {
      state.isLight = !state.isLight
    }
  }
})

export const { switchTheme } = themeSlice.actions
export default themeSlice.reducer
