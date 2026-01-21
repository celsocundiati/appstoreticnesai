export default function AppCard({ app }) {
  return (
    <div className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
      <h3 className="font-bold text-lg">{app.nome}</h3>
      <p className="text-sm text-gray-500">{app.empresa}</p>

      <div className="flex items-center gap-2 mt-2 text-sm">
        ⭐ {app.rating} ({app.reviews})
      </div>

      <p className="mt-3 text-sm text-gray-600">
        {app.descricao}
      </p>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span>⬇ {app.downloads}</span>
        <span
          className={`font-semibold ${
            app.preco === "Gratuito"
              ? "text-green-600"
              : "text-blue-600"
          }`}
        >
          {app.preco}
        </span>
      </div>
    </div>
  );
}
