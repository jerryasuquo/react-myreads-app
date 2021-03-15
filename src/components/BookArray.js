import React from "react";
import PropTypes from "prop-types";
import BookLibrary from "./BookLibrary";

class BookArray extends React.Component {
  static propTypes = {
    booksArr: PropTypes.array.isRequired,
    toggleLibrary: PropTypes.func.isRequired,
  };

  render() {
    const { booksArr, toggleLibrary } = this.props;
    const libraryTypes = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want to Read" },
      { type: "read", title: "Read" },
    ];

    return (
      <div className="list-books-content">
        {libraryTypes.map((library, idx) => {
          const libraryBooks = booksArr.filter(
            (book) => book.library === library.type
          );
          return (
            <div className="bookshelf" key={idx}>
              <h2 className="bookshelf-title">{library.title}</h2>
              <div className="bookshelf-books">
                <BookLibrary
                  booksArr={libraryBooks}
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
