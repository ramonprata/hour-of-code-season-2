import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Navigation from '../navigation/navigation';
function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.grid}
          >
            <Typography variant="h6" color="inherit">
              Bookstore
            </Typography>
            <Navigation />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

var styles = {
  root: {
    flexGrow: 1
  },
  grid: {
    // backgroundColor: 'purple'
  }
};

export default withStyles(styles)(SimpleAppBar);
