import React from "react";
import Book from "./Book";

const SearchResults = (props) => {
  const { searchBooks, currentBooks, onMove } = props;
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
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
