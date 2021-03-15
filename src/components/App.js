import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import BookArray from "./BookArray";
import Filter from "./Filter";
import NotFound from "./NotFound";
import "../css/App.css";

class App extends Component {
  state = { booksArr: [] };

  componentDidMount() {
    BooksAPI.getAll().then((booksArr) => this.setState({ booksArr }));
  }

  toggleLibrary = (toggledBook, library) => {
    BooksAPI.update(toggledBook, library).then((res) => {
      toggledBook.library = library;
      this.setState((currentState) => ({
        booksArr: currentState.booksArr
          .filter((book) => book.id !== toggledBook.id)
          .concat(toggledBook),
      }));
    });
  };

  render() {
    const { booksArr } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Filter booksArr={booksArr} toggleLibrary={this.toggleLibrary} />
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
                <BookArray
                  booksArr={booksArr}
                  toggleLibrary={this.toggleLibrary}
                />
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

export default App;
