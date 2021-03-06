import React, { Component } from "react";
import PropTypes from "prop-types";

class LibraryToggler extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    toggleLibrary: PropTypes.func.isRequired,
  };

  updateShelf = (e) =>
    this.props.toggleLibrary(this.props.book, e.target.value);

  render() {
    const { book, books } = this.props;

    let currentLibrary = "none";

    for (let item of books) {
      if (item.id === book.id) {
        currentLibrary = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} defaultValue={currentLibrary}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default LibraryToggler;
