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
        <a href="#education">Educación</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Conacto</a>
      </nav>
    </header>
  );
};

export default Navbar;
