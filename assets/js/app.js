import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Root from './views/Root';
import reducers from './reducers';
import '../css/App.css'; 

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(),
))

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)