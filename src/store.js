import { createStore, applyMiddleware, compose } from 'redux';
import { save } from 'redux-localstorage-simple';

import reducer from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(save({ namespace: 'todos' }))
);
const store = createStore(reducer, enhancer);

export default store;
