import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/" className="navbar-item navbar-brand">Seddiq</Link>
        <div className="navbar-links">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/professional" className="navbar-item">Experiences</Link>
            <Link to="/professional" className="navbar-item">Projects</Link>
            <Link to="/professional" className="navbar-item">Music</Link>
            <Link to="/professional" className="navbar-item">Contact</Link>
        </div>
    </nav>
);

export default Navbar;
