import React from 'react';
import { IconButton, Button, Badge } from '@material-ui/core/';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
const cart = props => {
  return (
    <IconButton color="inherit" onClick={() => props.goTo('shopping-cart')}>
      <Badge badgeContent={props.amountCart} color="primary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default cart;
