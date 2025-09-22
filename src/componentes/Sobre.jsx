import entregaImg from "../assets/entrega.png";
import restaurantesImg from "../assets/restaurantes.png";
import pagamentoImg from "../assets/pagamento.png";

export default function Features() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      {/* Título */}
      <h2 className="text-3xl font-bold mb-4">
        Por que escolher o <span className="text-pink-600">GourmetOn?</span>
      </h2>
      <p className="text-gray-600 mb-12">
        Descubra como podemos tornar sua experiência gastronômica ainda mais{" "}
        <span className="font-semibold">especial</span>
      </p>

      {/* Grid de Features */}
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <img src={entregaImg} alt="Entrega rápida" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="font-bold text-xl mb-2">Entrega Rápida</h3>
          <p className="text-gray-600 text-sm">
            Receba seu pedido em tempo recorde. Nossa rede de entregadores garante
            que sua comida chegue quente e na hora.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <img src={restaurantesImg} alt="Variedade de restaurantes" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="font-bold text-xl mb-2">Variedade de Restaurantes</h3>
          <p className="text-gray-600 text-sm">
            Centenas de restaurantes parceiros para você escolher. Da fast-food à
            alta gastronomia, temos opções para todos os gostos.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <img src={pagamentoImg} alt="Pagamento fácil" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="font-bold text-xl mb-2">Pagamento Fácil</h3>
          <p className="text-gray-600 text-sm">
            Diversas formas de pagamento seguras e práticas. Pague com cartão,
            transferência ou até mesmo na entrega.
          </p>
        </div>
      </div>
    </section>
  );
}
