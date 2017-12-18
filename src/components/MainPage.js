import React, { Component, } from 'react';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as utils from '../utils';

class MainPage extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  }

  render () {
    return (
      <div className='list-books' >
        <div className='list-books-title' >
          <h1 >MyReads</h1 >
        </div >
        <div className='list-books-content' >
          <div >
            {utils.getBookShelves(utils.shelves, this.props.books, this.props.updateBookShelf)}
          </div >
        </div >
        <div className='open-search' >
          <Link to='/search' >Search books</Link >
        </div >
      </div >
    )
  }
}

export default MainPage;