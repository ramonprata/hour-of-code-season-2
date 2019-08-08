import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartList from './shoppingCartList';
import { Grid, Button } from '@material-ui/core';

const shoppingCartPage = props => {
  return (
    <Grid container direction="column" style={{ padding: '20px 100px' }}>
      <h3>Lista de compra</h3>
      <ShoppingCartList shoppingCart={props.shoppingCart} />
      <Grid container direction="row" justify="flex-end">
        <Button variant="contained" color="primary">
          Comprar
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ bookStore }) => {
  return {
    shoppingCart: bookStore.shoppingcart
  };
};
export default connect(mapStateToProps)(shoppingCartPage);
