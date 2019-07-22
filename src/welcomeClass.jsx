import React, { Component, PureComponent } from 'react';
import meuEstiloModulo from './testeEstilo.module.css';

class WelcomeClass extends Component {
  componentDidMount() {
    console.log(' componentDidMount WelcomeClass');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate  WelcomeClass');
    return nextProps.paragrafo !== this.props.paragrafo;
  }

  render() {
    console.log(' render WelcomeClass');
    const { content } = styles;
    return (
      <div className={meuEstiloModulo.divDois} style={{ ...content }}>
        <p>{this.props.paragrafo}</p>
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
