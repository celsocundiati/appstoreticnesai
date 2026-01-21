export default function Hero({ app }) {
  return (
    <section
      className={`rounded-3xl mt-25 p-10 text-center text-white bg-linear-to-l ${app.gradient}`}
    >

      <h1 className="text-4xl font-bold mt-6">{app.nome}</h1>
      <p className=" text-lg text-center mx-50 my-5">
        {app.descricao}
      </p>

      <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl">
        Publicar Meu App
      </button>
    </section>
  );
}
