import Home from "./components/Body/Home";
import Navbar from "./components/Header/Navbar";
import Educacion from "./components/Body/Educacion";
import Proyectos from "./components/Body/Proyectos";
import Footer from "./components/Body/Footer";
import Habilidades from "./components/Body/Habilidades";
import Servicios from "./components/Body/Servicios";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Educacion />
      <Habilidades/>
      <Proyectos />
      <Servicios />
      <Footer/>
    </>
  );
}

export default App;
