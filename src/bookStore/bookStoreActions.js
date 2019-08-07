export const SET_TITLE = 'bookStore/SET_TITLE';
export const SET_SHOPPING_CART = 'bookStore/SET_SHOPPING_CART';

export const setTitle = title => {
  return {
    type: SET_TITLE,
    payload: title
  };
};

export const setShoppingCart = book => {
  console.log('setShoppingCart book :', book);
  return {
    type: SET_SHOPPING_CART,
    payload: book
  };
};
