import React from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";
import noCover from "../images/no-cover-image.png";

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  render() {
    // destructuring the book, books, changeShelf properties from this.props
    const { book, books, changeShelf } = this.props;

    // adding fallbacks for missing cover images and title
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
            <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
          </div>
          <div className="book-title">{title}</div>
          {
            // checking for authors, and rendering each on separate line if exist
            book.authors &&
              book.authors.map((author, index) => (
                <div className="book-authors" key={index}>
                  {author}
                </div>
              ))
          }
        </div>
      </li>
    );
  }
}

export default Book;
