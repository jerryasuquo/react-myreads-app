import React, { Component } from "react";
import PropTypes from "prop-types";
import BookLibrary from "./BookLibrary";

class BookArray extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    toggleLibrary: PropTypes.func.isRequired,
  };

  render() {
    const { books, toggleLibrary } = this.props;
    const libraryName = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want to Read" },
      { type: "read", title: "Read" },
    ];

    return (
      <div className="list-books-content">
        {libraryName.map((shelf, idx) => {
          const libraryBooks = books.filter(
            (book) => book.shelf === shelf.type
          );
          return (
            <div className="bookshelf" key={idx}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookLibrary
                  books={libraryBooks}
                  toggleLibrary={toggleLibrary}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookArray;
