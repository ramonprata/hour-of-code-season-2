import { combineReducers, createStore, applyMiddleware } from 'redux';

import bookStoreReducer from '../bookStore/bookStoreReducer';
import layoutReducer from '../layout/redux/layoutReducer';
const reducers = combineReducers({
  bookStore: bookStoreReducer,
  layout: layoutReducer
});
const store = createStore(reducers);
export default store;
