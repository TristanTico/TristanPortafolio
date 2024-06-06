import React from "react";

const Servicios = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">Servicios</h2>
      <div className="services-container">
        <div className="services-box">
          <div className="service-info">
            <h4>Desarrollador Frontend</h4>
            <p>
              Como desarrollador frontend, estoy especializado en crear
              interfaces de usuario atractivas y funcionales utilizando
              tecnologías como HTML, CSS y JavaScript. Me encargo de traducir
              diseños de UI/UX en código y de garantizar una experiencia de
              usuario óptima en diferentes dispositivos y navegadores.
            </p>
          </div>
        </div>

        <div className="services-box">
          <div className="service-info">
            <h4>Desarrollador Backend</h4>
            <p>
              Como desarrollador backend, me encargo de construir y mantener la
              lógica y la funcionalidad de los servidores, bases de datos y
              aplicaciones. Trabajo con tecnologías como Node.js, PHP y bases de
              datos como MySQL y MongoDB para crear sistemas escalables y
              seguros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
