import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

const SearchBooks = (props) => {
  const { searchBooks, currentBooks, onMove, onSearch, onCloseSearch } = props;
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={onCloseSearch}>
            Close
          </button>
        </Link>
        <SearchInput onSearch={onSearch} />
      </div>
      <SearchResults
        searchBooks={searchBooks}
        currentBooks={currentBooks}
        onMove={onMove}
      />
    </div>
  );
};

export default SearchBooks;
