import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import WelcomeFunction from './welcomeFunction';
import WelcomeClass from './welcomeClass';

const arrayTest = [1, 2, 3, 4, 5];

class App extends Component {
  funcaoUm = () => {
    alert('chamada um');
  };

  funcaoDois = () => {
    alert('chamada dois');
  };

  render() {
    const { container, content, divUm, divDois } = styles;
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <div style={container}>
              <WelcomeFunction
                bgColor="purple"
                paragrafo="Texto um...."
                onChamadaBla={this.funcaoUm}
                tituloBotao="Botao um"
              >
                <img src={logo} className="App-logo" alt="logo" />
              </WelcomeFunction>

              <WelcomeFunction
                bgColor="#0073b2"
                paragrafo="Texto dois...."
                tituloBotao="Botão dois"
                onChamadaBla={this.funcaoDois}
              >
                <img src={logo} className="App-logo" alt="logo" />
              </WelcomeFunction>
            </div>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

var anotherOne = `I have global scope`;

var styles = {
  container: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};
export default App;
