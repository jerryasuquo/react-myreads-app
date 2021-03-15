import React from "react";
import PropTypes from "prop-types";
import LibraryToggler from "./LibraryToggler";
import noCover from "../images/no-cover-image.png";

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    booksArr: PropTypes.array.isRequired,
    toggleLibrary: PropTypes.func.isRequired,
  };

  render() {
    const { book, booksArr, toggleLibrary } = this.props;

    const coverImg =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : noCover;

    const title = book.title ? book.title : "Title unavailable";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${coverImg})` }}
            />
            <LibraryToggler
              book={book}
              books={booksArr}
              toggleLibrary={toggleLibrary}
            />
          </div>
          <div className="book-title">{title}</div>
          {book.authors &&
            book.authors.map((author, idx) => (
              <div className="book-authors" key={idx}>
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
