import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './book.css';
import { Link } from 'react-router-dom';

function Book() {
  // State variables for storing book data and search input
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState('');

  // Fetch book data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make API request to get book data
        const result = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' }
        });
        // Update state with the received book data
        setBooks(result.data.books);
      } catch (error) {
        // Log error details if the API request fails
        console.log("Status Code:", error.response.status);
        console.log("Website not found");
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Handler function for updating the searchBook state based on input changes
  const handleSearch = (e) => setSearchBook(e.target.value);

  // Filter books based on the search input
  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchBook.toLowerCase()));

  return (
    <>
      {/* Navbar with title, search input, and register button */}
      <div className="navbar">
        <h1>Kalvium Books</h1>
        <input className="search" type="text" placeholder="Search for books..." value={searchBook} onChange={handleSearch} />
        <Link to="/register">
          <button className="register-button">REGISTER</button>
        </Link>
      </div>

      {/* Grid to display filtered books */}
      <div className="grid">
        {filteredBooks.map((book, index) => (
          <div key={index} className="item">
            {/* Book details: title, image, author, and rating */}
            <h2 className="title">{book.title}</h2>
            <div className="details">
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
