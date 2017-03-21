import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';

import App from './main/components/App';
import rootReducer from './main/reducer';
import thunk from 'redux-thunk';  
const initialState = {};
import { composeWithDevTools } from 'redux-devtools-extension';
const store: Store<any> = createStore(rootReducer, initialState, composeWithDevTools(
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);