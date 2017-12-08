import React from 'react';
import { Link, Route, withRouter, } from 'react-router-dom';
import * as BooksAPI from './api/BooksAPI';
import './App.css';
import Search from './components/Search';
import * as utils from './utils';
import PropTypes from 'prop-types';

class BooksApp extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    books: [],
  };

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
      this.props.history.push('/');
    });
  };

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books, });
    });
  };

  componentDidMount () {
    this.getAllBooks();
  }

  render () {
    const books = [];
    for (const index in this.state.books) {
      books[this.state.books[index].id] = this.state.books[index].shelf
    }
    return (
      <div className='app' >
        <Route exact path='/' render={() => (
          <div className='list-books' >
            <div className='list-books-title' >
              <h1 >MyReads</h1 >
            </div >
            <div className='list-books-content' >
              <div >
                {utils.getBookShelves(utils.shelves, this.state.books, this.updateBookShelf)}
              </div >
            </div >
            <div className='open-search' >
              <Link to='/search' >Search books</Link >
            </div >
          </div >
        )} />
        <Route exact path='/search' render={() => (
          <Search
            updateBookShelf={this.updateBookShelf}
            books={books}
          />
        )} />
      </div >
    );
  }
}

export default withRouter(BooksApp);
