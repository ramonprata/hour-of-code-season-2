import React, { Component } from 'react';
import axios from 'axios';
import BookStorePage from './bookStorePage';
class BookStoreContainer extends Component {
  state = {
    books: [],
    chamadaConcluida: false,
    erro: false
  };

  async componentDidMount() {
    try {
      const respostaAPIBooks = await axios.get(
        'https://workshopreact-a7f54.firebaseio.com/books.json/'
      );

      this.setState({
        books: respostaAPIBooks.data,
        chamadaConcluida: true
      });
    } catch (error) {
      console.log('error :', error);
      this.setState({
        chamadaConcluida: true,
        erro: true
      });
    }
  }

  render() {
    const { books, chamadaConcluida, erro } = this.state;
    return <BookStorePage books={books} erro={erro} chamadaConcluida={chamadaConcluida} />;
  }
}

export default BookStoreContainer;
