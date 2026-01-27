
function Principio(){
    return (
        <section className="p-8 bg-gray-50 rounded-2xl shadow-lg max-w-4xl mx-auto my-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Divisão das Páginas a Criar
            </h1>

            {/* Front-End */}
            <div className="mb-8">
                <p className="text-xl font-semibold text-gray-700 mb-4">Front-End</p>
                <div className="flex flex-wrap gap-4">
                {["Ariel", "José", "Esménio", "Mauro", "Júlio"].map((nome) => (
                    <span
                    key={nome}
                    className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full shadow-sm hover:bg-blue-200 transition"
                    >
                    {nome}
                    </span>
                ))}
                </div>
            </div>

            {/* Back-End */}
            <div>
                <p className="text-xl font-semibold text-gray-700 mb-4">Back-End</p>
                <div className="flex flex-wrap gap-4">
                {["Cristiano", "Celso", "Cornélio", "Mariche"].map((nome) => (
                    <span
                    key={nome}
                    className="px-4 py-2 bg-green-100 text-green-800 font-medium rounded-full shadow-sm hover:bg-green-200 transition"
                    >
                    {nome}
                    </span>
                ))}
                </div>
            </div>
            </section>

    )
}

export default Principio