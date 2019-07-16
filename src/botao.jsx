import React, { Component } from 'react';
import { Button } from '@material-ui/core';

const Botao = props => {
  const { onChamadaBla, exibe, tituloBotao } = props;
  return (
    exibe && (
      <Button variant="contained" onClick={onChamadaBla}>
        {tituloBotao}
      </Button>
    )
  );
};

export default Botao;
