import React from 'react';
import { IconButton, Button, Badge } from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
const wishList = props => {
  return (
    <IconButton color="inherit" onClick={() => props.goTo('wish-list')}>
      <Badge badgeContent={3} color="secondary">
        <FavoriteIcon />
      </Badge>
    </IconButton>
  );
};

export default wishList;
