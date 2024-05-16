import React from "react";
import Book from "./Book";

const SearchResults = (props) => {
  const { searchBooks, currentBooks, updateBookshelf } = props;
  const updatedBookList = searchBooks.map((book) => {
    currentBooks.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBookList.map((book) => (
          <li id={book.id}>
            <Book book={book} updateBookshelf={updateBookshelf} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
