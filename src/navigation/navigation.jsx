import React from 'react';
import Cart from './cart';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WishList from './wishList';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { Grid } from '@material-ui/core';
const navigation = props => {
  const { classes, amountCart, amountWishList } = props;
  const goTo = path => {
    props.history.push(path);
  };

  return (
    <Grid container direction="row" justify="space-between" className={classes.container}>
      <WishList goTo={goTo} amountWishList={amountWishList} />
      <Cart goTo={goTo} amountCart={amountCart} />
    </Grid>
  );
};

var styles = {
  container: {
    width: 120
  }
};
const mapStateToProps = ({ bookStore }) => {
  return {
    amountCart: bookStore.shoppingcart.length,
    amountWishList: bookStore.wishList.length
  };
};

export default compose(
  connect(mapStateToProps),
  withRouter,
  withStyles(styles)
)(navigation);
