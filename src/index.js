/* eslint-env browser */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'normalize.css'
import App from './app'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
)

serviceWorker.register()
