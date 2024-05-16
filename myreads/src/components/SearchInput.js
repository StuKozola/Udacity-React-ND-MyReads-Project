import React from "react";

const SearchInput = (props) => {
  const { query, setQuery } = props;
  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        value={query}
        placeholder="Search by title or author"
        onChange={(event) => setQuery(event.target.value)}
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
