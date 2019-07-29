import React from 'react';
import Cart from './cart';
import WishList from './wishList';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { Grid } from '@material-ui/core';
const navigation = props => {
  console.log('props :', props);
  const { classes } = props;

  const goTo = path => {
    props.history.replace(path);
  };

  return (
    <Grid container direction="row" justify="space-between" className={classes.container}>
      <WishList goTo={goTo} />
      <Cart goTo={goTo} />
    </Grid>
  );
};

var styles = {
  container: {
    width: 120
  }
};
export default withRouter(withStyles(styles)(navigation));
