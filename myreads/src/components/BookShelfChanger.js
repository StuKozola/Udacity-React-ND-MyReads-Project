import React, { Component } from "react";

class BookShelfChanger extends Component {
  shelfState = {
    value: this.props.shelf,
  };

  onShelfChange = (event) => {
    const { value } = event.target;
    this.setState({ valeu });
    this.props.onMove(this.props.book, value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value={this.shelfState.value} onChange={this.onShelfChange}>
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

export default BookShelfChanger;
