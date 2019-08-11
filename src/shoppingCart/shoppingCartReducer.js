import { SET_COMPRA } from './shoppingCartActions';
const INITIAL_STATE = {
  compraEfetuada: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COMPRA:
      return { ...state, compraEfetuada: !state.compraEfetuada };

    default:
      return state;
  }
};
