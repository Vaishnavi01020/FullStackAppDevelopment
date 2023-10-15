import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditOrDelete.css';

const EditOrDelete = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({
    book_id: '',
    book_name: '',
    author: '',
    price: '',
   
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/books/get'); // Replace with your Spring Boot API endpoint
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

 

  const openUpdatePopup = (book) => {
    setSelectedBook(book);
    setUpdatedBook(book);
  };

  const updateBook = async () => {
    try {
      await axios.put(`http://localhost:8080/api/v1/books/put/${selectedBook.book_id}`, updatedBook); // Replace with your Spring Boot API endpoint
      fetchBooks();
      setSelectedBook(null);
    } catch (error) {
      console.error(error);
    }
  };

 

  return (
    <div className="edit-or-delete-container">
     
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.book_id}</td>
              <td>{book.book_name}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
             
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => openUpdatePopup(book)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
     

      {/* Update Popup */}
      {selectedBook && (
        <div className="popup">
          <div className="popup-content">
            <h2>Update Book</h2>
            <input
              type="text"
              value={updatedBook.book_id}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, book_id: e.target.value })
              }
              placeholder="Recipe_id"
            />
            <input
              type="text"
              value={updatedBook.book_name}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, book_name: e.target.value })
              }
              placeholder="Recipe_name"
            />
            <input
              type="text"
              value={updatedBook.author}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, author: e.target.value })
              }
              placeholder="Preparation"
            />
            <input
              type="text"
              value={updatedBook.Ingredients}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, price: e.target.value })
              }
              placeholder="Ingredients"
            />
           
            <button className="btn btn-success" onClick={updateBook}>
              Update
            </button>
           
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedBook(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditOrDelete;