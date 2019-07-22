import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import WelcomeFunction from './welcomeFunction';
class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: 'Hello..',
      counter: 0
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({ comment: 'Comentario alterado..' });
    }, 5000);
    setInterval(() => {
      this.setState(prevState => {
        return {
          counter: prevState.counter + 1
        };
      });
    }, 1000);

    this.setState(prevState => {});
  }

  funcaoUm = () => {
    alert('chamada um');
  };

  funcaoDois = () => {
    alert('chamada dois');
  };

  render() {
    const { container, content, divUm, divDois } = styles;
    const { comment, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: '#282c34' }}>{comment}</h1>
          <h3 style={{ color: '#282c34' }}>{counter}</h3>
          <div style={container}>
            {/* <WelcomeClass paragrafo={comment} /> */}
            <WelcomeFunction
              bgColor="purple"
              paragrafo="Texto um...."
              onChamadaBla={this.funcaoUm}
              tituloBotao="Botao um"
            >
              <img style={{ height: 150, width: 150 }} src={logo} className="App-logo" alt="logo" />
            </WelcomeFunction>

            <WelcomeFunction
              bgColor="#0073b2"
              paragrafo="Texto dois...."
              tituloBotao="Botão dois"
              onChamadaBla={this.funcaoDois}
            >
              <img style={{ height: 150, width: 150 }} src={logo} className="App-logo" alt="logo" />
            </WelcomeFunction>
          </div>
        </header>
      </div>
    );
  }
}

var styles = {
  container: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default DemoPage;
