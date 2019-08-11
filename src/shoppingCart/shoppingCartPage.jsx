import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartList from './shoppingCartList';
import { Grid, Button } from '@material-ui/core';
import { efetuaCompra } from './operations';
const shoppingCartPage = props => {
  const { efetuaCompra } = props;
  return (
    <Grid container direction="column" style={{ padding: '20px 100px' }}>
      <h3>Lista de compra</h3>
      <ShoppingCartList shoppingCart={props.shoppingCart} />
      <Grid container direction="row" justify="flex-end">
        <Button variant="contained" color="primary" onClick={efetuaCompra}>
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

const mapDispatchToProps = {
  efetuaCompra: efetuaCompra
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(shoppingCartPage);
