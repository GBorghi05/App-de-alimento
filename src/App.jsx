import Header from "./componentes/Header";
import Form from "./componentes/Form";
import Footer from "./componentes/Footer";
import Sobre from "./componentes/Sobre"
import Hs from "./componentes/Hs";
import Funcionalidades from './componentes/Funcionalidades';
import Depoimentos from './componentes/Depoimentos';

export default function App() {
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
