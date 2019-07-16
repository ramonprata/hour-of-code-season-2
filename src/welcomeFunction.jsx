import React, { Component } from 'react';
import Botao from './botao';
const WelcomeFunction = props => {
  const { bgColor, paragrafo, onChamadaBla } = props;
  const { content, divUm } = styles;

  return (
    <div style={{ ...content, backgroundColor: bgColor }}>
      {props.children}
      <p>{paragrafo}</p>
      <Botao exibe={onChamadaBla ? true : false} onChamadaBla={onChamadaBla} {...props} />
    </div>
  );
};

var styles = {
  content: {
    padding: 10,
    borderRadius: 10,
    width: '40%'
  }
};

WelcomeFunction.defaultProps = {
  paragrafo: 'Nâo possui paragrafo'
};
export default WelcomeFunction;
