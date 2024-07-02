import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Book List</Link>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link>
          </li>
          <li>
            <Link to="/delete-book">Delete Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/delete-book" element={<DeleteBook />} />
      </Routes>
    </div>
  );
}

export default App;
