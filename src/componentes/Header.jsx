import React, { useState } from 'react';

// --- Ícone do Menu Hamburger ---
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export default function Header() {
    // State para controlar a visibilidade do menu mobile (opcional, para futuras implementações)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: 'Início', href: '#' },
        { title: 'Cardápios', href: '#' },
        { title: 'Sobre Nós', href: '#' },
        { title: 'Contato', href: '#' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    
                    {/* --- Logo --- */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-gray-900">GourmetGo</a>
                    </div>

                    {/* --- Navegação para Desktop --- */}
                    {/* A classe 'hidden md:flex' esconde o menu em telas pequenas e o exibe a partir de 'md' */}
                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.title} href={link.href} className="text-gray-600 hover:text-pink-500 transition-colors duration-200">
                                {link.title}
                            </a>
                        ))}
                    </nav>

                    {/* --- Botão de Ação --- */}
                    <div className="hidden md:block">
                        <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200">
                            Peça Agora
                        </a>
                    </div>
                    
                    {/* --- Botão do Menu Mobile --- */}
                    {/* A classe 'md:hidden' exibe o botão apenas em telas pequenas */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>

                {/* --- Menu Mobile Dropdown (opcional) --- */}
                {/* Este menu apareceria ao clicar no botão. A lógica de exibição está ligada ao state 'isMenuOpen' */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col space-y-4">
                             {navLinks.map((link) => (
                                <a key={link.title} href={link.href} className="text-gray-600 hover:text-pink-500 rounded-md p-2 text-center bg-gray-50">
                                    {link.title}
                                </a>
                            ))}
                             <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200 text-center">
                                Peça Agora
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}