// app/javascript/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import greetingReducer from './reducers';

const store = createStore(
  greetingReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
