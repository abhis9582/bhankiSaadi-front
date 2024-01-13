import Home from './components/home/home'
import Login from './components/Login/login'
import Header from './components/header/header'
import Register from './components/Register/register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
