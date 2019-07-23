import React, { Component } from 'react';

const BookStorePage = props => {
  const { books, erro, chamadaConcluida } = props;
  const exibirBooks = chamadaConcluida && books.length > 0;

  const conteudo = () => {
    if (!chamadaConcluida) {
      return <span>Loading...</span>;
    } else if (exibirBooks) {
      return <h1>Hello..{JSON.stringify(props.books)}</h1>;
    } else {
      return <span>Ocorreu um erro inesperado</span>;
    }
  };

  return <React.Fragment>{conteudo()}</React.Fragment>;
};

export default BookStorePage;
