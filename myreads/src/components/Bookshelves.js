import React from "react";
import Bookshelf from "./Bookshelf";

const Bookshelves = ({ books, updateBookshelf }) => {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div>
      <Bookshelf
        shelf="Currently Reading"
        books={currentlyReading}
        updateBookshelf={updateBookshelf}
      />
      <Bookshelf
        shelf="Want to Read"
        books={wantToRead}
        updateBookshelf={updateBookshelf}
      />
      <Bookshelf shelf="Read" books={read} updateBookshelf={updateBookshelf} />
    </div>
  );
};

export default Bookshelves;
