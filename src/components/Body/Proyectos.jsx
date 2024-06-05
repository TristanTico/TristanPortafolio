import React from "react";

import sistemaExperto from "../../assets/img/sistemaExperto.png";
import portafolio from "../../assets/img/portafolio.png";

const Proyectos = () => {
  return (
    <div>
      <h2 className="heading">Proyectos</h2>
      <section
        id="proyectos"
        className="my-12 flex flex-col items-center justify-center w-[90%] m-auto lg:flex-row"
      >
        <div className="border-1 rounded-l bg-slate-800 m-5">
          <div className="m-2">
            <img
              src={portafolio}
              alt=""
              className="opacity-80 hover:opacity-100"
            />
            <h4 className="font-bold my-2">Portafolio Personal</h4>
            <p className="my-2">
              Portafolio personal, una muestra interactiva y visual de mis
              habilidades, proyectos y experiencia. Esta página ha sido
              desarrollada con las últimas tecnologías web, incluyendo HTML,
              CSS, JavaScript y React, para ofrecerte una experiencia de usuario
              fluida y moderna.
            </p>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  HTML
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  CSS
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  JS
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  React
                </span>
              </div>
              <div className="text-xl text-slate-200 pr-2 flex flex-nowrap">
                <a href="https://github.com/TristanTico/TristanPortafolio" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
        <div className="border-1 rounded-l bg-slate-800 m-5">
          <div className="m-2">
            <img
              src={sistemaExperto}
              alt=""
              className="opacity-80 hover:opacity-100"
            />
            <h4 className="font-bold my-2">
              Sistema Experto de recomendaciones turísticas
            </h4>
            <p className="my-2">
              Aplicación web diseñada para ayudarte a descubrir los mejores
              lugares turísticos, ya sea que busques playas paradisíacas,
              vibrantes ciudades o majestuosas montañas. Esta plataforma combina
              datos detallados, reseñas de usuarios y sugerencias personalizadas
              para ofrecerte recomendaciones de viaje excepcionales.
            </p>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  PHP
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  Laravel
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  Mysql
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  Boostrap
                </span>
              </div>
              <div className="text-xl text-slate-200 pr-2 flex flex-nowrap">
                <a href="https://github.com/TristanTico/sistemaExpertoRecomendaciones" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
