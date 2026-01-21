import { Download } from "lucide-react";

export default function AppCard({ app }) {

  return (
    <div className="bg-white border border-black/10 rounded-2xl p-6 hover:shadow-lg transition cursor-pointer">
      <article className="flex gap-2">
          <article className="p-1 bg-black/8 text-4xl max-h-14 rounded-xl">{app.icon}</article>

          <div>
              <h3 className="font-bold text-lg">{app.nome}</h3>
              <p className="text-sm text-gray-500">{app.empresa}</p>
              <div className="flex items-center gap-2 text-sm">
                ⭐ {app.rating} ({app.reviews})
              </div>
          </div>
      </article>


      <p className="mt-3 text-sm text-gray-600">
        {app.descricao}
      </p>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="flex gap-1.5"><Download size={18} /> {app.downloads}</span>
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
