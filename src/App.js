import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DemoPage from './Demo/demoPage';
import AppBarCustomizado from './layout/appBar';
import BookStoreContainer from './bookStore/bookStoreContainer';
import ShoppingCartPage from './shoppingCart/shoppingCartPage';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppBarCustomizado />
          <Switch>
            <Route exact path="/" component={DemoPage} />
            <Route exact path="/wish-list" component={BookStoreContainer} />
            <Route exact path="/shopping-cart" component={ShoppingCartPage} />
            <Route path="/(\w+)" component={DemoPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

var anotherOne = `I have global scope`;

export default App;
