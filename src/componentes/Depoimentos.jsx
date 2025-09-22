// Dentro de src/componentes/Depoimentos.jsx

import React from 'react';

// --- Ícone ---
const StarIcon = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> );

const TestimonialCard = ({ name, text }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
      <div>
        <h4 className="font-bold text-gray-800">{name}</h4>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-yellow-400" />)}
        </div>
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">"{text}"</p>
  </div>
);

export default function Depoimentos() {
  const testimonials = [
    { name: 'Ana Silva', text: 'O GourmetGo mudou completamente a maneira como peço comida em casa. A variedade de restaurantes é impressionante e o rastreamento em tempo real me mantém tranquila.' },
    { name: 'Carlos Mendes', text: 'A variedade de restaurantes é impressionante. Já descobri lugares incríveis que nem sabia que existiam na minha cidade. O sistema de avaliação dos outros usuários também me ajudou na escolha.' },
    { name: 'Juliana Costa', text: 'Como mãe de dois filhos pequenos, o GourmetGo tem sido um verdadeiro anjo da guarda. A personalização dos pedidos me ajuda a fazer escolhas saudáveis e sempre chego na favorita das crianças.' }
  ];
  
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">O que nossos clientes dizem</h2>
          <p className="mt-4 text-lg text-gray-600">Experiências reais de pessoas que utilizam o GourmetGo diariamente.</p>
        </div>
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
      </div>
    </section>
  );
}