import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

const SearchBooks = (props) => {
  const { searchBooks, query, setQuery, updateBookshelf, combinedBooks } =
    props;
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <SearchInput query={query} setQuery={setQuery} />
      </div>
      <SearchResults
        searchBooks={searchBooks}
        currentBooks={combinedBooks}
        updateBookshelf={updateBookshelf}
      />
    </div>
  );
};

export default SearchBooks;
