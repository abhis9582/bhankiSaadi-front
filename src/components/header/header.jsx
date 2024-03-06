import './header.css' // Adjust the path based on your file structure
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';


const Header = () => {
    const isLoggedIn = localStorage.getItem('authToken');
    const loggedInUsername = localStorage.getItem('name');
    const navigate = useNavigate();
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };
    const handleClick = () => {
        window.location.href = '/home';
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('name');
        navigate('/login');
    };
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className='container-fluid'>
        
            <div className='row justify-content-around align-items-center'>
                <div className='col-3 text-start' onClick={handleClick}>
                    <div className='logo pl-2 mt-2'>
                        <h6>Behen</h6>
                        <span>kiShadi</span>
                    </div>
                </div>
                <div className='col-9 text-center navbar'>
                    <div className='toggle-btn' onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={`list ${isMobileMenuOpen ? 'show' : ''}`}>
                        <li>
                            <a href='/home'>Home</a>
                        </li>
                        <li >
                            <a href="#">
                                Live Collectors
                            </a></li>
                        <li>
                            <a href='/About'>About Us</a>
                        </li>
                    </ul>
                    <div className='userInfo'>
                        <h2>Hello, {loggedInUsername}!<Link to='/profile'><FaRegUserCircle /></Link></h2>
                        {isLoggedIn ? (
                            <button className='btn bg-danger my-2' onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <div onMouseEnter={togglePopup} onMouseLeave={closePopup}>
                                <Link to='/login' className='btn btn-primary my-2'>
                                    Login
                                </Link>
                                <Popup isOpen={isPopupOpen} closePopup={closePopup} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
       
    <navbar className="text-body-tertiary">
                            <div className="container">

                            </div>
    </navbar>
  


        </div>
    );
};

export default Header;
