import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(),
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)