import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import * as BooksAPI from "./BooksAPI";
import useQuery from "./hooks/useQuery";
import SearchBooks from "./components/SearchBooks";
import Bookcase from "./components/Bookcase";

const App = () => {
  //set states for the app
  const [books, setBooks] = useState([]);
  const [BookIDs, setBookIDs] = useState(new Map());
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useQuery(query);
  const [combinedBooks, setCombinedBooks] = useState([]);

  // mapping of book ids
  const createBookMap = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  // update function for bookshelf location
  const updateBookshelf = (book, whichShelf) => {
    const updatedBookList = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = whichShelf;
        return book;
      }
      return b;
    });
    if (!BookIDs.has(book.id)) {
      book.shelf = whichShelf;
      updatedBookList.push(book);
    }
    setBooks(updatedBookList);
    BooksAPI.update(book, whichShelf);
  };

  // get the book data from backend
  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
      setBookIDs(createBookMap(data));
      //console.log(data);
    });
  }, []);

  // create search listing of conbined books from bookshelves
  useEffect(() => {
    const combined = searchBooks.map((book) => {
      if (BookIDs.has(book.id)) {
        return BookIDs.get(book.id);
      } else {
        return book;
      }
    });
    setCombinedBooks(combined);
  }, [BookIDs, searchBooks]);

  // build the app screen
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Bookcase books={books} updateBookshelf={updateBookshelf} />}
        ></Route>
        <Route path="/search" element={<SearchBooks />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
