import React, { Component } from "react";
import PropTypes from "prop-types";

class LibraryToggler extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    booksArr: PropTypes.array.isRequired,
    toggleLibrary: PropTypes.func.isRequired,
  };

  updateLibrary = (e) =>
    this.props.updateLibrary(this.props.book, e.target.value);

  render() {
    const { book, booksArr } = this.props;

    let currentLibrary = "none";

    for (let item of booksArr) {
      if (item.id === book.id) {
        currentLibrary = item.library;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateLibrary} defaultValue={currentLibrary}>
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
