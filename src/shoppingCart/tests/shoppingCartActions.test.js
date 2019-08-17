import {
  setCompra,
  setLoadingCompra,
  SET_COMPRA,
  SET_LOADING_COMPRA
} from '../shoppingCartActions';

describe('Testa shoppingCartActions', () => {
  it('Testa função setCompra(). Deve retornar type: SET_COMPRA', () => {
    const resposta = setCompra();
    expect(resposta).toHaveProperty('type', SET_COMPRA);
  });

  it('Testa função setCompra(). Não deve retornar payload', () => {
    const resposta = setCompra();
    expect(resposta).not.toHaveProperty('payload');
  });

  it('Testa função setLoadingCompra(). Deve retornar type: SET_LOADING_COMPRA', () => {
    const resposta = setLoadingCompra();
    expect(resposta).toHaveProperty('type', SET_LOADING_COMPRA);
  });

  it('Testa função setLoadingCompra(). Não deve retornar payload', () => {
    const resposta = setLoadingCompra();
    expect(resposta).not.toHaveProperty('payload');
  });
});
