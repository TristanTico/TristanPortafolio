import React from "react";

import sistemaExperto from '../../assets/img/sistemaExperto.png';
import portafolio from '../../assets/img/portafolio.png';

const Proyectos = () => {
  return (
    <div>
      <h2 className="heading">Proyectos</h2>
      <section id="proyectos" className="my-12 flex flex-col items-center justify-center w-[90%] m-auto lg:flex-row">
        <div className="border-1 rounded-l bg-slate-800 m-5">
          <div className="m-2">
            <img
              src={portafolio}
              alt=""
              className="opacity-80 hover:opacity-100"
            />
            <h4 className="font-bold my-2">
              Portafolio Personal
            </h4>
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
              </div>
              <div className="text-xl text-slate-200 pr-2 flex flex-nowrap">
                <a href="#">
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
              </div>
              <div className="text-xl text-slate-200 pr-2 flex flex-nowrap">
                <a href="#">
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
