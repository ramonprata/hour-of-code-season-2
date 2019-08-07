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
import { setShoppingCart } from './bookStoreActions';
const BookCard = props => {
  const { classes, book } = props;
  return (
    <Card className={classes.card}>
      <Grid container direction="column" justify="flex-end">
        <CardMedia
          id={`imgBook${book.id}`}
          onClick={() => {}}
          className={classes.cover}
          image={book.volumeInfo.imageLinks.thumbnail}
        />
        <CardContent className={classes.cardContent}>
          <Typography component="p" variant="subtitle1" id={`tituloLivro${book.id}`}>
            {book.volumeInfo.title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" id={`autorLivro${book.id}`}>
            {book.volumeInfo.authors ? book.volumeInfo.authors.join(' ') : ''}
          </Typography>
        </CardContent>
        <div>
          <IconButton aria-label="Add to favorites" id={`btnFavorite${book.id}`} onClick={() => {}}>
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="Share"
            id={`btnShopping${book.id}`}
            onClick={() => props.setShoppingCart(book)}
          >
            <ShoppingCart />
          </IconButton>
        </div>
      </Grid>
    </Card>
  );
};

BookCard.propTypes = {
  classes: PropTypes.object.isRequired
};

BookCard.defaultProps = {
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
  setShoppingCart: setShoppingCart
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(BookCard);
