import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import meuEstiloModulo from './testeEstilo.module.css';
const arrayTest = [1, 2, 3, 4, 5];

class App extends Component {
  render() {
    const { container, content, divUm, divDois } = styles;
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div style={container}>
              <div style={{ ...content, ...divUm }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex! Quis
                  debitis eaque similique asperiores iste odit provident nam excepturi sapiente
                  numquam. Numquam nisi pariatur, illo iusto laborum soluta libero?
                </p>
              </div>
              <div className={meuEstiloModulo.divDois} style={{ ...content }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex! Quis
                  debitis eaque similique asperiores iste odit provident nam excepturi sapiente
                  numquam. Numquam nisi pariatur, illo iusto laborum soluta libero?
                </p>
              </div>
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
  },
  content: {
    padding: 10,
    borderRadius: 10
  },
  divUm: {
    backgroundColor: 'purple',
    width: '40%'
  }
};
export default App;
