export default function Form(){
    return(
        <section className="py-20 bg-[#f9f9f9] flex flex-col justify-center items-center gap-10">
            <h1 className="text-2xl font-semibold">Fique por dentro das novidades!</h1>
            <p className="text-[#797979]">Cadastre-se para receber ofertas exclusivas e ser o primeiro a saber sobre novos restaurantes</p>
            <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-md shadow-xl flex flex-wrap gap-3 items-center">

                <div className="w-[47%] flex flex-col gap-1">
                    <label className="font-semibold text-[#242424]" htmlFor="">Nome</label>
                    <input className=" border rounded-md p-2 border-[#797979]" type="text" placeholder="Seu nome completo" />
                </div>

                 <div className="w-[47%] flex flex-col gap-1">
                    <label  className="font-semibold text-[#242424]" htmlFor="">Email</label>
                    <input className=" border rounded-md p-2 border-[#797979]" type="text" placeholder="Seu melhor email" />
                </div>

                <button className="mt-10 rounded-[20px] bg-pink-700 text-white w-auto px-4 py-2 mx-auto">Cadastrar</button>

            </div>
        </section>
       
    )
}