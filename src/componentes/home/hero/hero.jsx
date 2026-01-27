export default function Hero({ app }) {
  return (
    <section
      className={`rounded-3xl mt-25 py-10 px-20 text-white bg-linear-to-r ${app.gradient}`}
    >
      <span className="bg-white/20 px-4 py-1 rounded-full text-sm transition-transform duration-300 ease-in-out">
        ✨ {app.tag}
      </span>

      <h1 className="text-4xl font-bold mt-6 transition-transform duration-300 ease-in-out">{app.nome}</h1>
      <p className="mt-4 text-left text-lg transition-transform duration-300 ease-in-out">
        {app.descricao}
      </p>

      <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl cursor-pointer">
        Ver Detalhes
      </button>
    </section>
  );
}
