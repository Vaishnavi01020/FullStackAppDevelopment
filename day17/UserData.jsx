import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserData.css'; // Import your CSS file
import AdminHeader from './Dashboard/AdminHeader';
import Footer from './Footer';
function UserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make an HTTP GET request to your Spring Boot API
    axios.get('http://localhost:8181/api/v1/auth/users')
      .then(response => {
        setUsers(response.data); // Assuming the response is an array of UserDTO
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="user-data-container">
      <AdminHeader/>
      <h1>Users</h1>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
}

export default UserData;
