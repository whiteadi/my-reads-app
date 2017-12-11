import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import * as utils from '../utils';

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfType: PropTypes.string.isRequired,
    shelfName: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  };

  render () {
    return (
      <div className='bookshelf' >
        <h2 className='bookshelf-title' >{this.props.shelfName}</h2 >
        {
          utils.displayBooksGrid(
            this.props.books, this.props.updateBookShelf
          )
        }
      </div >
    );
  }
}

export default BookShelf;