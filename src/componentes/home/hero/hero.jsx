export default function Hero({ app }) {
  return (
    <section
      className={`rounded-3xl p-10 text-white bg-linear-to-r ${app.gradient}`}
    >
      <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
        ✨ {app.tag}
      </span>

      <h1 className="text-4xl font-bold mt-6">{app.nome}</h1>
      <p className="mt-4 max-w-xl text-lg">
        {app.descricao}
      </p>

      <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl">
        Ver Detalhes
      </button>
    </section>
  );
}
