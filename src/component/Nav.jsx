import React from 'react';
import logo from '../asset/logo.png';

const Nav = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Trabook</h2>
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <div className="header-links">
        <ul>
          <li onClick={() => handleScroll('home')}>Home</li>
          <li onClick={() => handleScroll('about')}>About</li>
          <li onClick={() => handleScroll('destination')}>Destination</li>
          <li onClick={() => handleScroll('tour')}>Tour</li>
          <li onClick={() => handleScroll('blog')}>Blog</li>
        </ul>
      </div>
      <div className="profile">
        <a href="#" onClick={() => handleScroll('login')}>Login</a>
        <button className="btn">Sign up</button>
      </div>
    </nav>
  );
};

export default Nav;
