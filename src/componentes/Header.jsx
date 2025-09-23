import React, { useState } from 'react';

export default function Header() {
    // State para controlar se o menu mobile está aberto ou fechado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // --- ÍCONE CORRIGIDO ---
    // A terceira instrução no 'd' foi trocada para 'M4 18h16'
    const menuIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );

    return (
        <header className="w-full px-4 lg:px-10 py-4 flex justify-between items-center sticky top-0 left-0 z-50 shadow-md bg-white">
            <h1 className="text-xl font-bold">
                Gourmet<span className="text-pink-700">On</span>
            </h1>

            {/* --- Navegação para Desktop --- */}
            <nav className="hidden lg:flex">
                <ul className="flex space-x-4 items-center justify-center">
                    <li><a href="#hs" className="text-gray-600 hover:text-pink-700">Home</a></li>
                    <li><a href="#sobre" className="text-gray-600 hover:text-pink-700">Sobre</a></li>
                    <li><a href="#funcionalidades" className="text-gray-600 hover:text-pink-700">Funcionalidades</a></li>
                    <li><a href="#depoimentos" className="text-gray-600 hover:text-pink-700">Depoimentos</a></li>
                    <li><a href="#form" className="text-gray-600 hover:text-pink-700">Contato</a></li>
                    <li>
                        <button className="flex items-center rounded-[20px] bg-pink-700 text-white px-4 py-2 hover:bg-pink-800 transition-colors">
                            Download app
                        </button>
                    </li>
                </ul>
            </nav>

            {/* --- Botão do Menu Mobile --- */}
            <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {menuIcon}
            </button>

            {/* --- Menu Mobile Dropdown --- */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
                    <nav>
                        <ul className="flex flex-col items-center p-4">
                            <li className="w-full text-center py-2"><a href="#hs" className="text-gray-600 hover:text-pink-700">Home</a></li>
                            <li className="w-full text-center py-2"><a href="#sobre" className="text-gray-600 hover:text-pink-700">Sobre</a></li>
                            <li className="w-full text-center py-2"><a href="#funcionalidades" className="text-gray-600 hover:text-pink-700">Funcionalidades</a></li>
                            <li className="w-full text-center py-2"><a href="#depoimentos" className="text-gray-600 hover:text-pink-700">Depoimentos</a></li>
                            <li className="w-full text-center py-2"><a href="#form" className="text-gray-600 hover:text-pink-700">Contato</a></li>
                            <li className="mt-4">
                                <button className="flex items-center rounded-[20px] bg-pink-700 text-white px-6 py-2 hover:bg-pink-800 transition-colors">
                                    Download app
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}