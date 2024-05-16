import React from "react";
import Book from "./Book";

const Bookshelf = (props) => {
  const { shelf, books, onMove } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} shelf={book.shelf} onMove={onMove} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
