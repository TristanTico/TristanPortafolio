import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll("section");
  }, []);

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    sectionsRef.current.forEach((sec) => {
      const top = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = "#" + sec.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        setActiveSection(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        Tristan <span>López</span>
      </a>
      <i className={`fa-solid ${menuActive ? "fa-x" : "fa-bars"}`} id="menu-icon" onClick={handleMenuClick}></i>
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <a href="#home" className={activeSection === "#home" ? "active" : ""}>
          Home
        </a>
        <a href="#education" className={activeSection === "#education" ? "active" : ""}>
          Educación
        </a>
        <a href="#habilidades" className={activeSection === "#habilidades" ? "active" : ""}>
          Habilidades
        </a>
        <a href="#proyectos" className={activeSection === "#proyectos" ? "active" : ""}>
          Proyectos
        </a>
        <a href="#services" className={activeSection === "#services" ? "active" : ""}>
          Servicios
        </a>
        <a href="#contact" className={activeSection === "#contact" ? "active" : ""}>
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
