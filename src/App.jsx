import React from 'react'

import Home from './components/Home/Home'
import Login from './components/Login/login'
import Register from './components/Register/register'
import AboutUs from './components/AboutUs/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    )
}

export default App

