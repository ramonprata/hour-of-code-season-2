import { SET_TITLE, SET_SHOPPING_CART, SET_WISH_LIST } from './bookStoreActions';
const INITIAL_STATE = {
  bookTitle: 'meu primeiro estado',
  shoppingcart: [],
  wishList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, bookTitle: action.payload };

    case SET_SHOPPING_CART:
      return { ...state, shoppingcart: [...state.shoppingcart, action.payload] };

    case SET_WISH_LIST:
      return { ...state, wishList: [...state.wishList, action.payload] };

    default:
      return { ...state };
  }
};

// const incluiBookNoCart = (state, book) => {
//   return { ...state, shoppingcart: [...state.shoppingcart, book] };
// };
