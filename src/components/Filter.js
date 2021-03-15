import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";

class Filter extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    toggleLibrary: PropTypes.func.isRequired,
  };

  state = {
    query: "",
    newBooksArr: [],
    searchError: false,
  };

  displayBooks = (e) => {
    const query = e.target.value;
    this.setState({ query: query });

    if (query) {
      BooksAPI.search(query.trim(), 10).then((books) => {
        if (books.length > 0)
          this.setState({ newBooksArr: books, searchError: false });
        else this.setState({ newBooksArr: [], searchError: true });
      });
    } else this.setState({ newBooksArr: [], searchError: false });
  };

  render() {
    const { query, newBooksArr, searchError } = this.state;
    const { books, toggleLibrary } = this.props;

    let searchDisplayed = newBooksArr.length > 0 && (
      <div>
        <h3>Search displayed {newBooksArr.length} books </h3>
        <ol className="books-grid">
          {newBooksArr.map((book) => (
            <Book
              book={book}
              books={books}
              toggleLibrary={toggleLibrary}
              key={book.id}
            />
          ))}
        </ol>
      </div>
    );

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Enter a title or author"
              value={query}
              onChange={this.displayBooks}
            />
          </div>
        </div>

        <div className="search-books-results">
          {searchDisplayed}
          {searchError && (
            <h3>
              Couldn't display any books. If it's not too much trouble, attempt
              once more!
            </h3>
          )}
        </div>
      </div>
    );
  }
}
export default Filter;
