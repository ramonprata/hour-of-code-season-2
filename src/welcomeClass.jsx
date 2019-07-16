import React, { Component } from 'react';
import meuEstiloModulo from './testeEstilo.module.css';

class WelcomeClass extends Component {
  render() {
    const { content } = styles;
    return (
      <div className={meuEstiloModulo.divDois} style={{ ...content }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex! Quis debitis eaque
          similique asperiores iste odit provident nam excepturi sapiente numquam. Numquam nisi
          pariatur, illo iusto laborum soluta libero?
        </p>
      </div>
    );
  }
}

var styles = {
  content: {
    padding: 10,
    borderRadius: 10
  }
};

export default WelcomeClass;
