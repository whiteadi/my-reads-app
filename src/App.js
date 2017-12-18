import React from 'react';
import { Route, withRouter, Switch, } from 'react-router-dom';
import * as BooksAPI from './api/BooksAPI';
import './App.css';
import Search from './components/Search';
import MainPage from './components/MainPage';
import PropTypes from 'prop-types';
import NothingHere from './components/NothingHere'

class BooksApp extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
    books: [],
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book,]),
      }))
      this.props.history.push('/');
    })
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books, });
    })
  }

  componentDidMount () {
    this.getAllBooks();
  }

  render () {
    const books = []
    for (const index in this.state.books) {
      books[this.state.books[index].id] = this.state.books[index].shelf;
    }
    return (
      <div className='app' >
        <Switch>
        <Route exact path='/' render={() => (
          <MainPage books={this.state.books} updateBookShelf={this.updateBookShelf} />
        )} />
        <Route exact path='/search' render={() => (
          <Search
            updateBookShelf={this.updateBookShelf}
            books={books}
          />
        )} />
          <Route component={NothingHere}/>
        </Switch>
      </div >
    )
  }
}

export default withRouter(BooksApp);
