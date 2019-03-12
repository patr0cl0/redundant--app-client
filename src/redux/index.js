import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import redu from './rootReducer';

const rootReducer = combineReducers({
  requests: redu
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

