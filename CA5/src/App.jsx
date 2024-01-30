import React from "react";
import Book from "./Components/book";
import Forms from "./Components/Forms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/forms" element={<Forms />} />
        
        <Route path="/register" element={<Forms />} />
      </Routes>
    </Router>
  );
}

export default App;
