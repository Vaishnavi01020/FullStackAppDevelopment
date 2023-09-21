import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Header from './Component/Header';
//import Footer from './Component/Footer';
//import AreaChart from './Component/dashboard/areachart';
import BarChart from './Component/dashboard/dashmain';
function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/SignUp" element={<SignUp/>} />
          <Route exact path="/BarChart" element={<BarChart/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
