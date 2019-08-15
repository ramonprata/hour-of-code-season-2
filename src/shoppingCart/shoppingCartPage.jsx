import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ShoppingCartList from './shoppingCartList';
import { Grid, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { efetuarCompra } from './shoppingCartOperations';
import ShoppingInfo from './shoppingInfo';
import { setLoadingCompra } from './shoppingCartActions';
const shoppingCartPage = props => {
  const { efetuarCompra, classes, compraEfetuada, loadingCompra, setLoadingCompra } = props;
  return (
    <Grid container direction="column" alignItems="center" className={classes.root}>
      <div className={classes.container}>
        <Grid container direction="row" item lg={12} sm={12} xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            Carrinho de compras
          </Typography>
        </Grid>
        <Grid container direction="row" justify="space-between">
          <Grid item lg={8} sm={8} xs={8} md={8}>
            <ShoppingCartList shoppingCart={props.shoppingCart} />
          </Grid>
          <Grid item lg={4} sm={4} xs={4} md={4} className={classes.shoppingInfo}>
            <ShoppingInfo
              compraEfetuada={compraEfetuada}
              loadingCompra={loadingCompra}
              amountBooks={props.shoppingCart.length}
              efetuarCompra={efetuarCompra}
            />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

const mapStateToProps = ({ bookStore, shoppingCart }) => {
  return {
    shoppingCart: bookStore.shoppingcart,
    compraEfetuada: shoppingCart.compraEfetuada,
    loadingCompra: shoppingCart.loadingCompra
  };
};

const mapDispatchToProps = {
  efetuarCompra: efetuarCompra,
  setLoadingCompra: setLoadingCompra
};
const styles = {
  root: {
    padding: '20px 100px',
    height: 'calc(100vh - 64px)'
  },
  container: {
    width: '85%'
  },
  title: {},
  shoppingList: {},
  shoppingInfo: {
    padding: '0px 10px'
  }
};
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(shoppingCartPage);
