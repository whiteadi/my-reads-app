import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  };

  render () {
    return (
      <div className='book' >
        <div className='book-top' >
          <div className='book-cover'
               style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`, }} >
          </div >
          <ShelfChanger
            book={this.props.book}
            currentShelf={this.props.book.shelf}
            updateBookShelf={this.props.updateBookShelf}
          />
        </div >
        <div className='book-title' >{this.props.book.title}</div >
        <div className='book-authors' >{this.props.book.authors
          ? this.props.book.authors.map((author) => author).join(', ') : ''}</div >
      </div >
    );
  }
}

export default Book;