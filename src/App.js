import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DemoPage from './Demo/demoPage';
import BookStoreAppBar from './bookStore/bookStoreAppBar';
import BookStoreContainer from './bookStore/bookStoreContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BookStoreAppBar />
        <Switch>
          <Route exact path="/" component={DemoPage} />
          <Route exact path="/bookstore" component={BookStoreContainer} />
          <Route path="/(\w+)" component={DemoPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

var anotherOne = `I have global scope`;

export default App;
