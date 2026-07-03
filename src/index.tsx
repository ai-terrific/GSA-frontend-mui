import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { persister, store } from './store'
import { AppTheme } from './theme'
import './styles/index.css'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement!)

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AppTheme>
          <App />
        </AppTheme>
      </PersistGate>
    </Provider>
  </StrictMode>
)
