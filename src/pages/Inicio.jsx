import { useEffect, useContext } from "react";
import Card from "../components/Card";
import ProductosContext from "../contexts/ProductosContext";
import ThemeContext from "../contexts/ThemeContext";
import Carrousel from "../components/Carrousel";

const Inicio = () => {
  const {theme} = useContext(ThemeContext)
  const {productos} = useContext(ProductosContext)

  useEffect(() => {
    document.title = "MusicStore | Inicio";
  }, []);

  return (
    <main className={`text-${theme} bg-${theme} py-3`}>
      <Carrousel />
      <section className="container py-4">
        <h2 className={`text-center bg-${theme}`}>
          Elegí entre los mejores géneros
        </h2>
        
        <div className={`container categoria p-3 text-${theme} bg-${theme}`}>
          <div className={`row justify-content-around container`}>
            {
              productos && productos.map(producto => (
                <Card key={producto.id} producto={producto} />
                ))
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio