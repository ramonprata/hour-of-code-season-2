import { SET_COMPRA, SET_LOADING_COMPRA } from './shoppingCartActions';
const INITIAL_STATE = {
  compraEfetuada: false,
  loadingCompra: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COMPRA:
      return { ...state, compraEfetuada: !state.compraEfetuada };

    case SET_LOADING_COMPRA:
      return { ...state, loadingCompra: !state.loadingCompra };

    default:
      return state;
  }
};
