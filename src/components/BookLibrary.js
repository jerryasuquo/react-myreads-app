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
        {booksArr.map((book) => (
          <Book
            book={book}
            booksArr={booksArr}
            toggleLibrary={toggleLibrary}
            key={book.id}
          />
        ))}
      </ol>
    );
  }
}

export default BookLibrary;
