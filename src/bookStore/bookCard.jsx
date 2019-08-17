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
import { setShoppingCart, setShoppingWishList } from './bookStoreActions';
import { goToPreview } from '../shared/utils';
export const bookCard = props => {
  const { classes, book, setShoppingCart, setShoppingWishList } = props;
  return (
    <Card className={classes.card}>
      <Grid container direction="column" justify="flex-end">
        <CardMedia
          id={`imgBook${book.id}`}
          onClick={() => goToPreview(book)}
          className={classes.cover}
          image={book.volumeInfo.imageLinks.thumbnail}
        />
        <CardContent className={classes.cardContent}>
          <Typography component="p" variant="subtitle1" id={`bookTitle${book.id}`}>
            {book.volumeInfo.title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" id={`bookAuthors${book.id}`}>
            {book.volumeInfo.authors ? book.volumeInfo.authors.join(' ') : ''}
          </Typography>
        </CardContent>
        <div>
          <IconButton
            aria-label="Add to favorites"
            id={`btnFavorite${book.id}`}
            onClick={() => setShoppingWishList(book)}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="Share"
            id={`btnShopping${book.id}`}
            onClick={() => setShoppingCart(book)}
          >
            <ShoppingCart />
          </IconButton>
        </div>
      </Grid>
    </Card>
  );
};

bookCard.propTypes = {
  classes: PropTypes.object.isRequired
};

bookCard.defaultProps = {
  book: {
    volumeInfo: { authors: [], title: '' }
  }
};

const styles = theme => ({
  card: {
    height: 350,
    width: 250,
    cursor: 'pointer',
    margin: '20px 0'
  },
  cardContent: {
    height: 75
  },
  cover: {
    height: 0.55 * 350,
    width: 250
  }
});

const mapStateToProps = ({ bookStore }) => {
  return {
    bookTitle: bookStore.title
  };
};

const mapDispatchToProps = {
  setShoppingCart: setShoppingCart,
  setShoppingWishList: setShoppingWishList
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(bookCard);
