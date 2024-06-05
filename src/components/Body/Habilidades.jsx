import React from "react";
import { Carousel } from "flowbite-react";

const Habilidades = () => {
  return (
    <section className="habilidades" id="habilidades">
      <h2 className="heading text-center text-3xl font-bold mb-8">Habilidades</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl h-96">
          <Carousel indicators={false}>
            <div className="flex flex-col justify-center items-center h-full">
              <i className="fab fa-html5 text-9xl text-orange-600"></i>
              <span className="mt-4 text-xl text-white font-semibold">HTML5</span>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <i className="fab fa-css3-alt text-9xl text-blue-600"></i>
              <span className="mt-4 text-xl text-white font-semibold">CSS3</span>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <i className="fab fa-js text-9xl text-yellow-500"></i>
              <span className="mt-4 text-xl text-white font-semibold">JavaScript</span>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <i className="fab fa-react text-9xl text-blue-500"></i>
              <span className="mt-4 text-xl text-white font-semibold">React</span>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <i className="fab fa-bootstrap text-9xl text-purple-600"></i>
              <span className="mt-4 text-xl text-white font-semibold">Boostrap</span>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <i className="fab fa-laravel text-9xl text-purple-600"></i>
              <span className="mt-4 text-xl text-white font-semibold">Laravel</span>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <i className="fab fa-node text-9xl text-purple-600"></i>
              <span className="mt-4 text-xl text-white font-semibold">Nodejs</span>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <i className="fa-solid fa-database text-9xl text-purple-600"></i>
              <span className="mt-4 text-xl text-white font-semibold">Mysql</span>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <i className="fab fa-php text-9xl text-purple-600"></i>
              <span className="mt-4 text-xl text-white font-semibold">PHP</span>
            </div>
            
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
