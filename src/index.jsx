/* eslint-env browser */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'normalize.css'
import App from './app'
import { DicesProvider } from './contexts/dices'
import { LocalesProvider } from 'use-locales'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <DicesProvider>
    <LocalesProvider>
      <App />
    </LocalesProvider>
  </DicesProvider>,
  document.getElementById('root'),
)

serviceWorker.register()
