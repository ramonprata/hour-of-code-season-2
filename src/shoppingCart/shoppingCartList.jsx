import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ShoppingCartItem from './shoppingCartItem';
import { Paper, Typography } from '@material-ui/core';

function shoppingCartList(props) {
  const { classes, shoppingCart } = props;
  const mapBooksShoppingCart = () => {
    if (shoppingCart.length) {
      return (
        <Paper>
          {shoppingCart.map(book => (
            <ShoppingCartItem book={book} />
          ))}
        </Paper>
      );
    } else {
      return <Typography color="textSecondary">Não foi selecionado nenhum book</Typography>;
    }
  };
  return <List className={classes.root}>{mapBooksShoppingCart()}</List>;
}
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingTop: 0
  }
});

shoppingCartList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(shoppingCartList);
