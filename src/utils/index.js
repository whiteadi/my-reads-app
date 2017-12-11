import React from 'react';
import BookShelf from '../components/BookShelf';
import Book from '../components/Book';

export const shelves = {
  currentlyReading: 'Currently reading',
  wantToRead: 'Want to read',
  read: 'Read',
};

export const getBookShelves = (shelves, books, updateBookShelf) => {
  let divShevles = [];
  for (const [key, value,] of Object.entries(shelves)) {
    divShevles.push(
      <BookShelf
        key={key}
        books={books.filter((book) => book.shelf === key)}
        shelfName={value}
        shelfType={key}
        updateBookShelf={updateBookShelf}
      />
    );
  }
  return divShevles;
};

export const displayBooksGrid = (books, updateBookShelf) => {
  return (
    <ol className='books-grid' >
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} updateBookShelf={updateBookShelf} />
        </li>
      ))}
    </ol >)
};
