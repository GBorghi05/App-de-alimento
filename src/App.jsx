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
      try {
        const resp = await fetch(
          "https://api.spoonacular.com/recipes/random?number=5&apiKey=58905863d9634364a6b3db17f562c77f"
        );
        if (!resp.ok) {
          throw new Error(`HTTP ${resp.status}`);
        }

        const data = await resp.json();
        console.log("Resposta bruta da API:", data); // veja no console do navegador

        // AQUI: use 'data.recipes' (sem parênteses!)
        if (Array.isArray(data.recipes)) {
          setComidas(data.recipes);
          console.log("Primeira receita:", data.recipes[0]);
        } else {
          console.warn("Campo 'recipes' não veio como array:", data);
        }
      } catch (err) {
        console.error("Falha ao buscar receitas:", err);
      }
    };

    fetchData();
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
