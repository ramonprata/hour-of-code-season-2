import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, CircularProgress } from '@material-ui/core';

function shoppingInfo(props) {
  const { classes, amountBooks, efetuarCompra, compraEfetuada, loadingCompra } = props;
  if (!loadingCompra && compraEfetuada) {
    alert('Compra concluída com sucesso!');
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.pos} variant="h5" component="h2">
          Detalhes da compra
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Quantidade de livros: {amountBooks}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Total a pagar: $$$
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container direction="row-reverse">
          {loadingCompra ? (
            <CircularProgress size={18} />
          ) : (
            <Button size="small" variant="contained" color="primary" onClick={efetuarCompra}>
              Comprar
            </Button>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
}

shoppingInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};
export default withStyles(styles)(shoppingInfo);
