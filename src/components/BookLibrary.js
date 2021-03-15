import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookLibrary extends Component {
  static propTypes = {
    booksArr: PropTypes.array.isRequired,
    toggleLibrary: PropTypes.func.isRequired,
  };

  render() {
    const { booksArr, toggleLibrary } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={book}
            booksArr={booksArr}
            key={book.id}
            toggleLibrary={toggleLibrary}
          />
        ))}
      </ol>
    );
  }
}

export default BookLibrary;
