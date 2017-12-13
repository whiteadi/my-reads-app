import React, { Component, } from 'react';
import { Link, } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI';
import * as utils from '../utils';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    updateBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array,
  };

  state = {
    query: '',
    books: [],
  };

  updateQuery = (query) => {
    this.setState({ query, });
    if(/[\w\s]/i.test(query) && query.length >= 1) {
      /*eslint no-undef: "error"*/
      /*eslint-env browser*/
      setInterval(() => {
        localStorage.setItem('query', this.state.query.trim());
      }, 1000);
      this.searchBooks(query.trim());
    } else if (query.trim().length === 0) {
      this.setState({ books: [], })
    } else {
      this.searchBooks(query.trim());
    }
  };

  searchBooks = (query) => {
    if(/[\w\s]/i.test(query)) {
      BooksAPI
        .search(query)
        .then(this.setShelves)
        .then(books => this.setState({ books, }));
    }
  };

  setShelves = (books) => {
    if (Array.isArray(books)) {
      return books.map((book) => {
        const shelf = this.props.books[book.id];
        book.shelf = shelf ? shelf : 'none';
        return book;
      });
    } else {
      return [];
    }
  };

  componentDidMount = () => {
    const query = localStorage.getItem('query') || ''
    if (query) {
      this.setState({ query: query.trim(), });
      this.searchBooks(query);
    }
  }

  render () {

    return (
      <div className='search-books' >
        <div className='search-books-bar' >
          <Link className='close-search' to='/' >Close</Link >
          <div className='search-books-input-wrapper' >
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div >
        </div >
        <div className='search-books-results' >
          {
            utils.displayBooksGrid(this.state.books, this.props.updateBookShelf)
          }
        </div >
      </div >
    );
  }
}

export default Search;