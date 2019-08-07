import React from 'react';
import ShoppingCartList from './shoppingCartList';
import { Grid } from '@material-ui/core';

const shoppingCartPage = () => {
  return (
    <Grid container direction="column" style={{ padding: '20px 100px' }}>
      <h3>Lista de compra</h3>
      <ShoppingCartList />
    </Grid>
  );
};

export default shoppingCartPage;
