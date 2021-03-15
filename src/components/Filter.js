import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";

class Filter extends Component {
  static propTypes = {
    booksArr: PropTypes.array.isRequired,
    toggleLibrary: PropTypes.func.isRequired,
  };

  state = {
    query: "",
    newBooksArr: [],
    searchError: false,
  };

  getBooks = (e) => {
    const query = e.target.value;
    this.setState({ query });

    if (query) {
      BooksAPI.search(query.trim(), 20).then((booksArr) => {
        booksArr.length > 0
          ? this.setState({ newBooksArr: booksArr, searchError: false })
          : this.setState({ newBooksArr: [], searchError: true });
      });
    } else this.setState({ newBooksArr: [], searchError: false });
  };

  render() {
    const { query, newBooksArr, searchError } = this.state;
    const { booksArr, toggleLibrary } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>

        <div className="search-books-results">
          {newBooksArr.length > 0 && (
            <div>
              <h3>Search returned {newBooksArr.length} books </h3>
              <ol className="books-grid">
                {newBooksArr.map((book) => (
                  <Book
                    book={book}
                    booksArr={booksArr}
                    key={book.id}
                    toggleLibrary={toggleLibrary}
                  />
                ))}
              </ol>
            </div>
          )}
          {searchError && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Filter;
