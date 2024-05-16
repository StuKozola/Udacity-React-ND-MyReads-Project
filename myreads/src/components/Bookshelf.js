import React from "react";
import Book from "./Book";

const Bookshelf = (props) => {
  const { shelf, books, updateBookshelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li id={book.id}>
              <Book book={book} updateBookshelf={updateBookshelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
