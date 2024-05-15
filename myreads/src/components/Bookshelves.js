import React from "react";
import Bookshelf from "./Bookshelf";

const Bookshelves = ({ books, listBookOnShelf }) => {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div>
      <Bookshelf
        title="Currently Reading"
        books={currentlyReading}
        onChange={listBookOnShelf}
      />
      <Bookshelf title="Read" books={wantToRead} onChange={listBookOnShelf} />
      <Bookshelf title="Want to Read" books={read} onChange={listBookOnShelf} />
    </div>
  );
};

export default Bookshelves;
