import { setCompra } from './shoppingCartActions';
export const efetuaCompra = () => async dispatch => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(setCompra());
    }, 3000);
  });
};
