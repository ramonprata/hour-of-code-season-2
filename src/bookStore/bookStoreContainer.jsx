import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import BookStorePage from './bookStorePage';
import * as layoutActions from '../layout/redux/layoutActions';

const BookStoreContainer = props => {
  const [books, setBooks] = useState([]);
  const [chamadaConcluida, setChamadaConcluida] = useState(false);
  const [erro, setErro] = useState(false);

  const getBooks = async () => {
    try {
      props.setLoading();
      const respostaAPIBooks = await axios.get(
        'https://workshopreact-a7f54.firebaseio.com/books.json/'
      );
      setChamadaConcluida(true);
      setBooks(respostaAPIBooks.data);
      props.setLoading();
    } catch (error) {
      setChamadaConcluida(true);
      setErro(true);
    }
  };
  useEffect(() => {
    getBooks();
  }, [books, chamadaConcluida]);

  return <BookStorePage books={books} erro={erro} chamadaConcluida={chamadaConcluida} />;
};

const mapDispatchToProps = {
  setLoading: layoutActions.setLoading
};
export default connect(
  null,
  mapDispatchToProps
)(BookStoreContainer);
