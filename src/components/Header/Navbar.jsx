import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Tristan <span>López</span>
      </a>
      <i className="fa-solid fa-bars" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#education">Education</a>
        <a href="#services">Services</a>
      </nav>
    </header>
  );
};

export default Navbar;
