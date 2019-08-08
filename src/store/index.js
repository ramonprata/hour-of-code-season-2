import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookStoreReducer from '../bookStore/bookStoreReducer';
import layoutReducer from '../layout/redux/layoutReducer';
const reducers = combineReducers({
  bookStore: bookStoreReducer,
  layout: layoutReducer
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
