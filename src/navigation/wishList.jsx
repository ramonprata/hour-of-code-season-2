import React from 'react';
import { IconButton, Button, Badge } from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
const wishList = props => {
  const { amountWishList } = props;
  return (
    <IconButton color="inherit" onClick={() => props.goTo('wish-list')}>
      <Badge badgeContent={amountWishList} color="secondary">
        <FavoriteIcon />
      </Badge>
    </IconButton>
  );
};

export default wishList;
