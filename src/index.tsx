import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import GlobalStyle from './utils/GlobalStyles'
import { HashRouter } from 'react-router-dom'
import { DynamicTheme } from './components/DynamicTheme'
import { Provider } from 'react-redux'
import { store } from './utils/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <DynamicTheme>
          <GlobalStyle />
          <App />
        </DynamicTheme>
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
