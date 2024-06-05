import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hola, soy <span>Tristan López</span>
        </h1>
        <h3 className="text-animation">
          Soy un <span></span>
        </h3>
        <p>
          Informático empresarial apasionado por el desarrollo web y la
          creación de soluciones digitales que marcan la diferencia. Desde que
          descubrí mi amor por la tecnología, me he dedicado a perfeccionar mis
          habilidades y a seguir aprendiendo en este campo en constante
          evolución.
        </p>
        <p>Correo: josuel.jl57@gmail.com</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/josue-lopez-63210a293/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/TristanTico" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="btn-group">
          <a href="" className="btn">
            CV
          </a>
          <a href="mailto:josuel.jl57@gmail.com" className="btn">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
