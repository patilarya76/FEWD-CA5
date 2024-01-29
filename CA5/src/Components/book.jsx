// Book.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import './Book.css';

function Book() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' }
        });

        setBooks(result.data.books);
      } catch (error) {
        console.log("Status Code : ", error.response.status);
        console.log("Website not found");
      }
    };

    fetchUserData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="navbar">
        <h1>Kalvium Books</h1>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button>REGISTER</button>
      </div>
      <div className="book-container">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-item">
            <h2 className="book-title">{book.title}</h2>
            <div className="book-details">
              <img src={book.imageLinks.smallThumbnail} alt={book.title} className="book-img" />
            </div>
            <p className="book-author">{book.authors[0]}</p>
            <p className="book-rating">Rating: {book.averageRating}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Book;