import React from 'react';
import { ListItemText, ListItem, Grid, Button } from '@material-ui/core/';
import { withStyles } from '@material-ui/styles';
import { goToPreview } from '../shared/utils';
const shoppingCartItem = props => {
  const { classes, book } = props;
  return (
    <ListItem>
      <Grid container direction="row" alignItems="center" justify="space-around">
        <div>
          <img className={classes.image} src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
        </div>
        <ListItemText
          primary={book.volumeInfo.title}
          secondary={book.volumeInfo.authors ? book.volumeInfo.authors.join(' ') : ''}
        />
        <Button variant="text" color="primary" onClick={() => goToPreview(book)}>
          Book preview
        </Button>
      </Grid>
    </ListItem>
  );
};
const styles = {
  item: {
    width: '100%'
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15
  }
};
export default withStyles(styles)(shoppingCartItem);
