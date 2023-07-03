import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import GlobalStyle from './utils/theme/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { Theme } from './utils/theme/theme'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={Theme.DARK}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
)
