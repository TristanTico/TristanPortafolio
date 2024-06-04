import React from "react";

const Educacion = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline-items">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>Universidad de Costa Rica</h3>
            <p>
              Actualmente, estoy cursando un Bachillerato en Informática
              Empresarial en la Universidad de Costa Rica. Este programa
              académico me está proporcionando una sólida formación en la
              integración de tecnologías de la información con los procesos de
              negocios, permitiéndome desarrollar competencias tanto en el
              ámbito técnico como en el de gestión empresarial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educacion;
