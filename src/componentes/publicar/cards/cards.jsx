import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Download } from "lucide-react";
import TabelaOuCards from './tabelascard';

function Cards() {
  const [active, setActive] = useState("download"); // aba ativa

  return (
    <section>
      <div className="flex gap-4 my-5 border-b border-black/10 transition-all">

        {/* Download */}
        <span
          onClick={() => setActive("download")}
          className={`flex gap-1 items-center text-lg cursor-pointer px-2 py-4 ${
            active === "download" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700"
          }`}
        >
          <Download size={22} />
          Download
        </span>

        {/* Favorite */}
        <span
          onClick={() => {
            setActive("favorite"); // ativa aba favorite
          }}
          className={`flex gap-1 items-center text-lg cursor-pointer px-2 py-4 ${
            active === "favorite" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700"
          }`}
        >
          <FaRegHeart size={22} />
          Favorite
        </span>

      </div>

      <TabelaOuCards sessao={active} />
    </section>
  );
}

export default Cards;
