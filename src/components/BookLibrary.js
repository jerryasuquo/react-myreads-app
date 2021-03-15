import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookLibrary extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    toggleLibrary: PropTypes.func.isRequired,
  };

  render() {
    const { books, toggleLibrary } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={book}
            books={books}
            toggleLibrary={toggleLibrary}
            key={book.id}
          />
        ))}
      </ol>
    );
  }
}

export default BookLibrary;
