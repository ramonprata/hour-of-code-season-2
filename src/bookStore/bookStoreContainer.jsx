import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import BookStorePage from './bookStorePage';
import * as layoutActions from '../layout/redux/layoutActions';
class BookStoreContainer extends Component {
  state = {
    books: [],
    chamadaConcluida: false,
    erro: false
  };

  async componentDidMount() {
    try {
      this.props.setLoading();
      const respostaAPIBooks = await axios.get(
        'https://workshopreact-a7f54.firebaseio.com/books.json/'
      );

      this.setState({
        books: respostaAPIBooks.data,
        chamadaConcluida: true
      });
      this.props.setLoading();
    } catch (error) {
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

const mapDispatchToProps = {
  setLoading: layoutActions.setLoading
};
export default connect(
  null,
  mapDispatchToProps
)(BookStoreContainer);
