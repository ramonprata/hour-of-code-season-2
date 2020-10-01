import { setCompra, setLoadingCompra } from './shoppingCartActions';
export const efetuarCompra = () => async dispatch => {
  dispatch(setLoadingCompra());
  new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(setCompra());
      dispatch(setLoadingCompra());
    }, 3000);
  });
};
