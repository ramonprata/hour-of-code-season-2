import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ShoppingCart } from '@material-ui/icons/';
import { Grid, Typography, IconButton, CardMedia } from '@material-ui/core';
import * as bookStoreActions from './bookStoreActions';
export class BookCard extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.setBookTitle('As crônicas de Narnia');
    }, 3000);
  }

  render() {
    const { classes, book } = this.props;
    return (
      <Card className={classes.card}>
        <Grid container direction="column" justify="flex-end">
          <CardMedia
            id={`imgBook${book.id}`}
            onClick={() => {}}
            className={classes.cover}
            image={
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAB2CAMAAADle2GlAAAAVFBMVEXDw8MAAADHx8eampq2trYWFhZ0dHSoqKhpaWnLy8tjY2MZGRm/v7+wsLDOzs58fHwtLS2Li4s3NzehoaE9PT1NTU1cXFwnJydEREQKCgoyMjIeHh5YhBzxAAABZElEQVR4nO3Yy5KDIBCFYUAUibc4xlzf/z3HkDijThVxNc3i/1aWyeIUNNigFAAAAAAAAAAAAJAYs5dIOJft4yTi2Vzvk9v/D2dsdXB7HCqRdHnhdxRdW8iMXV4YZerG+uj/vFw6477ySx+tesF09eNZ9kMsnlw6P4RFWcbmVjCdC+mKVbrN9is4s+o0hbs1yzjGjatClFwV9fk0rsPZi9b9YjAlx055tZ7I9roZTdF027ddqMSj+vkpoXRmeH9by5TSzQ/1ff70Z3PpiaczdVaHx3b87UysSSSdGvU9vOoXfdNVpZHOP1fCYVq8zW3Z1nU+hXQ+C2GmPe6y7jpfpSeb7t0J6LwpNz3xIxSjcLp5JRz/tOyjeDrfRU4Uz9KTTGdcJJzW03FMsgtQVTRdJdujnKPhtD4buXRt/yHctNHInMmm03ahys+U0NilfNpO+6Yi8VuetG/IAAAAAAAAAAAAgJhvnKsQpRON+KwAAAAASUVORK5CYII='
            }
            title="Live from space album cover"
          />
          <CardContent className={classes.cardContent}>
            <Typography component="p" variant="subtitle1" id={`tituloLivro${book.id}`}>
              {this.props.bookTitle}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" id={`autorLivro${book.id}`}>
              Book Author
            </Typography>
          </CardContent>
          <div>
            <IconButton
              aria-label="Add to favorites"
              id={`btnFavorite${book.id}`}
              onClick={() => {}}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share" id={`btnShopping${book.id}`} onClick={() => {}}>
              <ShoppingCart />
            </IconButton>
          </div>
        </Grid>
      </Card>
    );
  }
}

BookCard.propTypes = {
  classes: PropTypes.object.isRequired
};

BookCard.defaultProps = {
  book: {
    id: 0
  }
};

const styles = theme => ({
  card: {
    height: 350,
    width: 250,
    cursor: 'pointer'
  },
  cardContent: {
    height: 75
  },
  cover: {
    height: 0.55 * 350,
    width: 250
  }
});

const mapStateToProps = ({ bookTitle }) => {
  return {
    bookTitle
  };
};

const mapDispatchToProps = {
  setBookTitle: bookStoreActions.setTitle
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(BookCard);
