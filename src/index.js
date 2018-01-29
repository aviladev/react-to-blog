import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import 'bootstrap/dist/css/bootstrap.min.css'

import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(promise))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)
registerServiceWorker()
