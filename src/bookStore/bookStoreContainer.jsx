import React, { Component } from 'react';
// import axios from 'axios';
import BookStorePage from './bookStorePage';
class BookStoreContainer extends Component {
  state = {
    books: []
  };

  async componentDidMount() {
    try {
      const respostaAPIBooks = axios.get('https://workshopreact-a7f54.firebaseio.com/books.json/');
    } catch (error) {}
  }

  render() {
    const { books } = this.state;
    return <BookStorePage books={books} />;
  }
}

export default BookStoreContainer;
