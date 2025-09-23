import React from 'react';

// 1. Importe a imagem da pasta assets
// O caminho '../assets/' sobe um nível de 'componentes' para 'src' e depois entra em 'assets'
import celularImg from '../assets/celular.png';

// --- Ícones (permanecem os mesmos) ---
const SearchIcon = () => ( <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> );
const FilterIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V16a1 1 0 01-.293.707l-2 2A1 1 0 0113 18v-1.586l-3.707-3.707A1 1 0 019 12V6.414L3.293 4.707A1 1 0 013 4z" /></svg> );
const ClockIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );
const StarIcon = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> );

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-pink-100 p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

export default function Funcionalidades() {
  const features = [
    { icon: <SearchIcon />, title: 'Busca Inteligente', description: 'Encontre facilmente restaurantes por tipo de comida, preço ou avaliação. Com os filtros, a busca será a maneira mais eficiente de encontrar.' },
    { icon: <FilterIcon />, title: 'Filtros Avançados', description: 'Filtre por preço, distância, tempo de entrega ou dietas específicas. Personalize sua experiência para encontrar opções que atendam suas necessidades.' },
    { icon: <ClockIcon />, title: 'Rastreamento em Tempo Real', description: 'Acompanhe seu pedido desde o preparo até a entrega. Com o rastreamento em tempo real, você sabe exatamente o quanto tempo falta para receber sua refeição.' },
    { icon: <StarIcon className="text-pink-500 w-6 h-6" />, title: 'Avaliações e Comentários', description: 'Veja o que outros clientes dizem dos restaurantes e compartilhe suas próprias experiências. Ajude a comunidade a encontrar as melhores opções.' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Funcionalidades do Aplicativo</h2>
          <p className="mt-4 text-lg text-gray-600">Conheça as ferramentas que tornam o nosso o melhor app de delivery.</p>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center">
          
          <div className="md:w-1/2 space-y-10">
            {features.map((feature, index) => <FeatureItem key={index} {...feature} />)}
          </div>
          
          {/* Coluna da Direita: Imagem do Celular */}
          <div className="md:w-1/2 flex justify-center">
            {/* 2. Substitua a div cinza pela tag <img> */}
            <img 
              src={celularImg} 
              alt="Tela do aplicativo GourmetGo em um celular" 
              className="max-h-[550px] w-auto" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}