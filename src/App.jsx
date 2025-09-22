import Header from "./componentes/Header";
import Form from "./componentes/Form";
import Footer from "./componentes/Footer";
import Sobre from "./componentes/Sobre"
import Hs from "./componentes/Hs";
import Funcionalidades from './componentes/Funcionalidades';
import Depoimentos from './componentes/Depoimentos';
import { useState, useEffect } from "react";

export default function App() {

  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        "https://api.spoonacular.com/recipes/random?number=10&apiKey=58905863d9634364a6b3db17f562c77f"
      );
      const data = await resp.json();
      setComidas(data.recipes);

      // imprimir só informações resumidas
      data.recipes.forEach((r, i) => {
        console.log(`Receita ${i + 1}:`);
        console.log("Título:", r.title);
        console.log("Tempo de preparo:", r.readyInMinutes, "minutos");
        console.log("Imagem:", r.image);
        console.log("--------------------");
      });
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <Header />
      <Hs />
      <Sobre />
      <Funcionalidades />
      <Depoimentos />
      <Form />
      <Footer />
    </div>
  );
}
