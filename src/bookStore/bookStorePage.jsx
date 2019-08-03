import React, { Component } from 'react';
import BookCard from './bookCard';
import withLoading from '../layout/withLoading';
import { Grid } from '@material-ui/core';
import BookStoreList from './bookStoreList';
import ListItems from '../shared/listItems';

const BookStorePage = props => {
  const { books, erro, chamadaConcluida } = props;
  const exibirBooks = chamadaConcluida && books.length > 0;

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ padding: '0 50px' }}
    >
      <ListItems itens={books} renderItem={book => <BookCard book={book} />} />
    </Grid>
  );
};

const BookStorePageWithLoading = withLoading(BookStorePage);
export default BookStorePageWithLoading;
