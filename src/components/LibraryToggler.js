import React, { Component } from "react";
import PropTypes from "prop-types";

class ShelfToggle extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  updateShelf = (e) => this.props.changeShelf(this.props.book, e.target.value);

  render() {
    const { book, books } = this.props;

    // setting current shelf to none as default
    let currentShelf = "none";

    // setting current shelf to book.shelf, if book is in current list
    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
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

export default ShelfToggle;
