import React from 'react';
import { IconButton, Button } from '@material-ui/core/';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
const cart = props => {
  return (
    <IconButton color="inherit" onClick={() => props.goTo('shopping-cart')}>
      <ShoppingCart />
    </IconButton>
  );
};

export default cart;
