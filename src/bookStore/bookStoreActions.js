export const SET_TITLE = 'bookStore/SET_TITLE';
export const SET_SHOPPING_CART = 'bookStore/SET_SHOPPING_CART';
export const SET_WISH_LIST = 'bookStore/SET_WISH_LIST';

export const setTitle = title => {
  return {
    type: SET_TITLE,
    payload: title
  };
};

export const setShoppingCart = book => {
  return {
    type: SET_SHOPPING_CART,
    payload: book
  };
};

export const setShoppingWishList = book => {
  return {
    type: SET_WISH_LIST,
    payload: book
  };
};
