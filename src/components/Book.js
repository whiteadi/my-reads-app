import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

const Book = ({ book, updateBookShelf, }) => {
  const cover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''
  return (
    <div className='book' >
      <div className='book-top' >
        <div className='book-cover'
             style={
               {
                 width: 128,
                 height: 193,
                 backgroundImage: `url(${cover})`,
               }
             } >
        </div >
        <ShelfChanger
          book={book}
          currentShelf={book.shelf}
          updateBookShelf={updateBookShelf}
        />
      </div >
      <div className='book-title' >{book.title}</div >
      <div className='book-authors' >{book.authors
        ? book.authors.map((author) => author).join(', ') : ''}</div >
    </div >
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
}

export default Book;