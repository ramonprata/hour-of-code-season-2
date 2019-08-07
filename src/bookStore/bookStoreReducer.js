import { SET_TITLE, SET_SHOPPING_CART } from './bookStoreActions';
const INITIAL_STATE = {
  bookTitle: 'meu primeiro estado',
  shoppingcart: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, bookTitle: action.payload };

    case SET_SHOPPING_CART:
      return { ...state, shoppingcart: [...state.shoppingcart, action.payload] };

    default:
      return { ...state };
  }
};

// const incluiBookNoCart = (state, book) => {
//   return { ...state, shoppingcart: [...state.shoppingcart, book] };
// };
