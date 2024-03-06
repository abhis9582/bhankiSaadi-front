import React,  { useState }  from 'react';
import './App.css';
import { BrowserRouter, Switch, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Footer from './components/Footer/footer';
import Headers from './components/header/header';
import Register from './components/Register/Register';
import Dashboard from './components/dashboard/dashboard';
import UserProfileCard from './components/UserProfileCard/Profile';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <BrowserRouter>
        
          <Headers />
          <Routes>
        
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login handleLogin={handleLogin} />} />
        <Route path="/" element={isLoggedIn ? <header handleLogout={handleLogout} /> : <Navigate to="/login" />} />
    
    
            <Route path="/" element={<Home />} />
            {/* <Route path="/login"  element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<UserProfileCard isLoggedIn={isLoggedIn} />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            {/* Other routes */}
            </Routes>
          {/* <Signin/> */}
          <Footer />
          {/* <Dashboard/> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
