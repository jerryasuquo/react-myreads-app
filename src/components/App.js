import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import BookArray from "./BookArray";
import Filter from "./Filter";
import NotFound from "./NotFound";
import "../css/App.css";

class App extends Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  toggleLibrary = (toggledBook, shelf) => {
    BooksAPI.update(toggledBook, shelf).then((res) => {
      toggledBook.shelf = shelf;
      this.setState((currentState) => ({
        books: currentState.books
          .filter((book) => book.id !== toggledBook.id)
          .concat(toggledBook),
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookArray books={books} toggleLibrary={this.toggleLibrary} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Filter books={books} toggleLibrary={this.toggleLibrary} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
