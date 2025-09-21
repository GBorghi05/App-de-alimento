export default function Hs() {
  const handleDownload = () => {
    alert("✅ Aplicativo instalado com sucesso!");
  };

  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center"
      style={{ backgroundImage: "url('/src/assets/bg-food.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-2xl px-8 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Comida deliciosa na <br /> porta da sua casa
        </h1>
        <p className="mb-6 text-lg text-gray-200">
          Descubra os melhores restaurantes da sua região e receba suas
          refeições favoritas com apenas alguns cliques. O GourmetOn torna a
          experiência de delivery mais rápida e saborosa.
        </p>

        <button
          onClick={handleDownload}
          className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Download App 📲
        </button>
      </div>
    </section>
  );
}
