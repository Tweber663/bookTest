import React, { useState, useEffect } from 'react';

const DeleteBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBooks(books.filter(book => book.id !== id));
      })
      .catch(error => console.error('Error deleting book:', error));
  };

  return (
    <div>
      <h1>Delete a Book</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteBook;
