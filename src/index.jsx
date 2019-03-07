/* eslint-env browser */
import React from 'react'
import ReactDOM from 'react-dom'
import { LocalesProvider } from 'use-locales'
import App from './app'
import { DicesProvider } from './contexts/dices'
import * as serviceWorker from './serviceWorker'
import './index.css'
import 'normalize.css'

ReactDOM.render(
  <DicesProvider>
    <LocalesProvider>
      <App />
    </LocalesProvider>
  </DicesProvider>,
  document.getElementById('root'),
)

serviceWorker.register()
