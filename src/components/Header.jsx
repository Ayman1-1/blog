import React from 'react';
import './Header.css'; // Import the CSS file for Header styling

const Header = ({ title, navLinks, isLoggedIn, headerColor }) => {
  return (
    <header className="header" style={{ backgroundColor: '#1e6091', paddingRight: '65%' }}>
      <div className="container">
        <div className="logo">
          <h2>{title}</h2>
        </div>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </nav>
        <>
        <button className="login-button" onClick={() => console.log("Clicked")}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </>
      </div>
    </header>
  );
};

export default Header;
