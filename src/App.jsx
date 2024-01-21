import React from 'react'

import Home from './components/Home/Home'
import Login from './components/Login/login'
import Header from './components/header/header'
import Register from './components/Register/register'
import AboutUs from './components/AboutUs/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/About' Component={AboutUs} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    )
}

export default App

