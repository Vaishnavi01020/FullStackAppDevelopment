import React, { useState, useEffect } from 'react';
import { UserProvider } from './components/context/UserContext';
import AppRoutes from './components/Routing';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminHeader from './components/Dashboard/AdminHeader';

function App() {
  //const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   // Perform conditional navigation when the component mounts
  //   if (loginFormData.email.toLowerCase() === 'admin') {
  //     navigate('/BarChart');
  //   }
  // }, [loginFormData.email, navigate]);

  return (
    <BrowserRouter>
      <UserProvider>
        
        <AppRoutes />
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
