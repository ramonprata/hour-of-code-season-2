import React from 'react';
import { Grid } from '@material-ui/core';
const listItems = props => {
  const { itens } = props;
  return (
    <Grid container direction="row" justify="space-around">
      {props.itens.map(item => props.renderItem(item))}
    </Grid>
  );
};

export default listItems;
