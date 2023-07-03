import { DefaultTheme } from 'styled-components'

const darkTheme: DefaultTheme = {
  colors: {
    background: 'rgb(24, 24, 24)',
    onBackground: 'rgb(255, 255, 255)',
    footer: 'rgb(39, 39, 39)',
    onFooterHover: 'rgb(128, 128, 128)',
    icon: 'rgb(255, 255, 255)',
  }
}

const lightTheme: DefaultTheme = {
  colors: {
    background: 'rgb(255, 255, 255)',
    onBackground: 'rgb(0, 0, 0)',
    footer: 'rgb(224, 224, 224)',
    onFooterHover: 'rgb(64, 64, 64)',
    icon: 'rgb(132, 132, 132)',
  }
}

export const Theme = {
  LIGHT: lightTheme,
  DARK: darkTheme,
}
