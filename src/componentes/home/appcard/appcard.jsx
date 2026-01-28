import { Download } from "lucide-react";
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
>>>>>>> 1e5355fe7cd8a1568412e774fafe690f0bab7419

export default function AppCard({ app }) {

  return (
<<<<<<< HEAD
    <Link to={`/app/${app.id}`} className="bg-white border border-black/10 rounded-2xl p-6 hover:shadow-lg transition cursor-pointer">
=======
    <div className="bg-white border border-black/10 rounded-2xl p-6 hover:shadow-lg transition cursor-pointer">
>>>>>>> 1e5355fe7cd8a1568412e774fafe690f0bab7419
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

<<<<<<< HEAD
      <div className="flex justify-between items-center mt-4 text-sm">
=======
      <div className="flex justify-between items-center mt-4 text-sm border-t border-black/5 pt-1.5">
>>>>>>> 1e5355fe7cd8a1568412e774fafe690f0bab7419
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
<<<<<<< HEAD
    </Link>
=======
    </div>
>>>>>>> 1e5355fe7cd8a1568412e774fafe690f0bab7419
  );
  
}
