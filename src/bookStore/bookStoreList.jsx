import React from 'react';
import { Grid } from '@material-ui/core';
import BookCard from './bookCard';
const bookStoreList = props => {
  const { books } = props;
  return (
    <Grid container direction="row" justify="space-around">
      {props.books.map(book => props.renderItem(book))}
    </Grid>
  );
};

export default bookStoreList;
