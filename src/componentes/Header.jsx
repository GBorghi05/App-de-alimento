

export default function Header(){
    return(
        <header className="w-full px-10 py-4 flex justify-between items-center sticky top-0 left-0 z-50 shadow-md bg-white">
            <h1 className="text-xl font-bold">Gourmet<span className="text-pink-700">On</span></h1>
            <nav>
                <ul className="flex space-x-4 items-center justify-center">
                    <li>
                        <a href="#hs">Home</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#funcionalidades">Funcionalidades</a>
                    </li>
                    <li>
                        <a href="#depoimentos">Depoimentos</a>
                    </li>
                    <li>
                        <a href="#form">Contato</a>
                    </li>
                    <li>
                        <button className="flex items-center  rounded-[20px] bg-pink-700 text-white px-4 py-2">Download app</button>
                    </li>
                </ul>
            </nav>
       </header>
    )
}