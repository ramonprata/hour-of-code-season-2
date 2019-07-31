import { createStore, applyMiddleware } from 'redux';
import bookStoreReducer from '../bookStore/bookStoreReducer';
const store = createStore(bookStoreReducer);
export default store;
