import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CircularProgress, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const withLoading = WrappedComponent => {
  return class extends React.PureComponent {
    render() {
      const { classes, loading } = this.props;
      return (
        <React.Fragment>
          {loading ? (
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.containerLoading}
            >
              <CircularProgress size={40} />
            </Grid>
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </React.Fragment>
      );
    }
  };
};

var styles = {
  containerLoading: {
    height: '80vh'
  }
};

const mapStateToProps = ({ layout }) => {
  return {
    loading: layout.loading
  };
};
const withLoadingHOC = compose(
  connect(mapStateToProps),
  withStyles(styles),
  withLoading
);

export default withLoadingHOC;
