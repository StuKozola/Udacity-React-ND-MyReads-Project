import React from "react";
import BookShelfChanger from "./BookshelfChanger";

const Book = (props) => {
  const { book, updateBookshelf } = props;
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 174,
          backgroundImage: `url(${
            book.imageLinks
              ? book.imageLinks.thumbnail
              : "icons/book-placeholder.svg"
          })`,
        }}
      />
      <BookShelfChanger book={book} updateBookshelf={updateBookshelf} />
    </div>

    <div className="book-title">{book.title}</div>
    <div className="book-authors">
      {book.authors ? book.authors.join(", ") : "Unknown"}
    </div>
  </div>;
};

export default Book;
