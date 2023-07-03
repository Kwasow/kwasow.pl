import React, { ReactNode } from 'react'
import { ThemeProvider, styled } from 'styled-components'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
import { Theme } from '../utils/theme'
import { switchTheme } from '../utils/slices/themeSlice'

type DynamicThemeProps = {
  children: ReactNode[]
}

export function DynamicTheme(props: DynamicThemeProps) {
  const isLight = useAppSelector(state => state.theme.isLight)

  const { children } = props

  return (
    <ThemeProvider theme={isLight ? Theme.LIGHT : Theme.DARK}>
      {children}
    </ThemeProvider>
  )
}

const ThemeButton = styled.button`
  background-color: rgb(39, 39, 39);
  color: white;
`

export function ThemeSwitcher() {
  const dispatch = useAppDispatch()

  return (
    <ThemeButton onClick={() => dispatch(switchTheme())}>
      SwitchTheme
    </ThemeButton>
  )
}
