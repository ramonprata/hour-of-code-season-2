import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Navigation from '../navigation/navigation';
function appBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid className={classes.logoContainer} onClick={() => props.history.replace('/')}>
              <Typography variant="h6" color="inherit">
                Bookstore
              </Typography>
            </Grid>
            <Navigation />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

appBar.propTypes = {
  classes: PropTypes.object.isRequired
};

var styles = {
  root: {
    flexGrow: 1
  },
  logoContainer: {
    cursor: 'pointer'
  }
};

export default compose(
  withRouter,
  withStyles(styles)
)(appBar);
