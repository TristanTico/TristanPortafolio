import Home from "./components/Body/Home";
import Navbar from "./components/Header/Navbar";
import Educacion from "./components/Body/Educacion";
import Proyectos from "./components/Body/Proyectos";
import Footer from "./components/Body/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Educacion />
      <Proyectos />
      <Footer/>
    </>
  );
}

export default App;
