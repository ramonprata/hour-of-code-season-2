import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ShoppingCartItem from './shoppingCartItem';
import { Paper } from '@material-ui/core';

function shoppingCartList(props) {
  const { classes } = props;
  return (
    <Paper>
      <List className={classes.root}>
        <ShoppingCartItem />
      </List>
    </Paper>
  );
}
const styles = theme => ({
  root: {
    width: '80%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

shoppingCartList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(shoppingCartList);
