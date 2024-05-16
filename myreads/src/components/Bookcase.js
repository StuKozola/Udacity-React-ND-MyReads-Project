import React from "react";
import { Link } from "react-router-dom";
import Bookshelves from "./Bookshelves";

const Bookcase = (props) => {
  const { books, updateBookshelf } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Bookshelves books={books} updateBookshelf={updateBookshelf} />
      <div className="open-search">
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    </div>
  );
};

export default Bookcase;
