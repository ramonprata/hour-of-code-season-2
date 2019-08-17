import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { bookCard as BookCard } from '../bookCard';
import { booksMock } from './booksMock';
configure({ adapter: new Adapter() });
/**
 * shallow: Função do Enzyme para conseguir montar e manipular nossos componentes em tempo de teste
 * configure: Função do Enzyme para "setar" versão do adapter do Enzyme para cada versão do React
 */

describe('Testa <BookCard />', function() {
  // moca as funções que o bookcard recebe como props
  // assim podemos fazer asserts sobre as funções
  let setShoppingCartMock = jest.fn();
  let setShoppingWishListMock = jest.fn();
  const bookMock = { ...booksMock.data[0] };
  let component;

  // Antes de cada teste, cria um componente BookCard
  beforeEach(() => {
    component = shallow(
      <BookCard
        setShoppingCart={setShoppingCartMock}
        setShoppingWishList={setShoppingWishListMock}
        classes={{}}
        book={bookMock}
      />
    );
  });

  // A função toMatchSnapshot() irá criar um Snapshot do componente
  // em formato JSON. Assim, se o componente for alterado o teste de snapshot
  // não irá passar ou seja, irá evidenciar a alteração do componente para altermos os testes
  it('Deve renderizar <BookCard /> ', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it(`Deve renderizar a imagem do book: imgBook${bookMock.id}`, () => {
    // encontra a imagem pelo id
    const imagemBook = component.find(`#imgBook${bookMock.id}`);
    // valida se a imagem existe
    expect(imagemBook.exists()).toEqual(true);
    // valida se a imagem renderizada corresponde a imagem do book passado como props
    expect(imagemBook.props().image).toEqual(bookMock.volumeInfo.imageLinks.thumbnail);
  });

  it(`Ao clicar na imagem do <BookCard /> deve chamar o window.open()
    E abrir uma aba com o preview do book`, () => {
    // mocka a função window.open() do browser
    global.open = jest.fn();
    // encontra a imagem
    const imagemBook = component.find(`#imgBook${bookMock.id}`);
    // simula o click na imagem
    imagemBook.simulate('click');
    // valida se a função open foi chamada
    expect(global.open).toHaveBeenCalled();
    // valida se a função open recebeu o link do preview do book como parâmetro
    expect(global.open).toBeCalledWith(bookMock.volumeInfo.previewLink);
  });

  it(`Deve renderizar o botão de incluir em na lista e desejos: btnFavorite${bookMock.id}`, () => {
    // valida se o botão de favoritar o book foi renderizado
    expect(component.find(`#btnFavorite${bookMock.id}`).exists()).toEqual(true);
  });

  it(`Ao clicar no de icone de  incluir em na lista e desejos: btnFavorite${
    bookMock.id
  } a função props.setShoppingWishList() deve ser executada `, () => {
    // encontra o botão
    const botao = component.find(`#btnFavorite${bookMock.id}`);
    // simula o click
    botao.simulate('click');
    // verifica se a função setShoppingWishListMock() foi executada
    expect(setShoppingWishListMock).toHaveBeenCalled();
  });

  it(`Deve renderizar o botão de incluir no carrinho de compras: btnShopping${bookMock.id}`, () => {
    // valida se o botão de incluir no carrinho o book foi renderizado
    expect(component.find(`#btnShopping${bookMock.id}`).exists()).toEqual(true);
  });

  it(`Ao clicar no botão  de incluir no carrinho de compras: btnShopping${
    bookMock.id
  } a função props.setShoppingCart() deve ser executada `, () => {
    // encontra o botão
    const botao = component.find(`#btnShopping${bookMock.id}`);
    // simula o click
    botao.simulate('click');
    // verifica se a função setShoppingWishListMock() foi executada
    expect(setShoppingCartMock).toHaveBeenCalled();
  });

  it(`Deve renderizar o titulo do book ${bookMock.volumeInfo.title}`, () => {
    // Encontra o componente que renderiza o titulo do book: Typography Material UI
    expect(component.find(`#bookTitle${bookMock.id}`).exists()).toEqual(true);
    // Valida se o children do Typography renderiza o titulo do book passado como props
    expect(
      component
        .find(`#bookTitle${bookMock.id}`)
        .children()
        .text()
    ).toEqual(bookMock.volumeInfo.title);
  });

  it(`Deve renderizar os autores do book`, () => {
    // monta mock de autores do book para validar
    const autoresDoLivroMock = `${bookMock.volumeInfo.authors.join(' ')}`;
    // Encontra o componente que renderiza os autores do book: Typography Material UI
    expect(component.find(`#bookAuthors${bookMock.id}`).exists()).toEqual(true);
    // Valida se o children do Typography renderiza os autores do book passado como props
    expect(
      component
        .find(`#bookAuthors${bookMock.id}`)
        .children()
        .text()
    ).toEqual(autoresDoLivroMock);
  });
});
