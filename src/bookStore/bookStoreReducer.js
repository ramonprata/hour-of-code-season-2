import { SET_TITLE } from './bookStoreActions';
const INITIAL_STATE = {
  bookTitle: 'meu primeiro estado'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, bookTitle: action.payload };
      break;

    default:
      return { ...state };
  }
};
