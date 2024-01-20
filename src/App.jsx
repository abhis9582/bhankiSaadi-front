import Home from './components/home/home'
import Login from './components/Login/login'
import Register from './components/Register/register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/dashboard/dashboard'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/dashboard' Component={Dashboard}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
