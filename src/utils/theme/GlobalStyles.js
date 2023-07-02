import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    src: url('./fonts/RobotoMono/RobotoMono-VariableFont_wght.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    src: url('./fonts/RobotoMono/RobotoMono-Italic-VariableFont_wght.ttf')
      format('truetype');
  }

  html {
    font-family: 'Roboto Mono';
  }

  button {
    font-family: 'Roboto Mono';
  }

  body {
    background-color: ${props => props.theme.colors.background};
  }
`

export default GlobalStyle
