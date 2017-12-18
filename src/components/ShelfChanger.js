import React, { Component, } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    currentShelf: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  };

  change = (event) => {
    this.props.updateBookShelf(this.props.book, event.target.value);
  };

  render () {
    return (
      <div className='book-shelf-changer' >
        <select onChange={this.change} value={this.props.currentShelf} >
          <option value='none' disabled >Move to...</option >
          <option value='currentlyReading' >Currently Reading</option >
          <option value='wantToRead' >Want to Read</option >
          <option value='read' >Read</option >
          <option value='none' >None</option >
        </select >
      </div >
    );
  }
}

export default ShelfChanger;