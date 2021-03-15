import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import BookList from "./BookList";
import Search from "./Search";
import NotFound from "./NotFound";
import "../css/App.css";

class BooksApp extends Component {
  state = { books: [] };

  componentDidMount() {
    // getting books on load
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then((res) => {
      // setting shelf for new or updated book
      changedBook.shelf = shelf;
      // updating state with changed book
      this.setState((currentState) => ({
        books: currentState.books
          // removing updated book from array
          .filter((book) => book.id !== changedBook.id)
          // adding updated book to array
          .concat(changedBook),
      }));
    });
  };

  render() {
    // destructuring the books property from this.state
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookList books={books} changeShelf={this.changeShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
