import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import {
  connectRouter,
  routerMiddleware
} from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';

import locales from './modules/locales';

// initialState
const initialState = fromJS();

// middleware
export const history = createBrowserHistory({
  basename: '/documentation/'
});

const middleware = [routerMiddleware(history)];

// root reducer
const rootReducer = combineReducers({
  locales
});

// Chrome develop extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
