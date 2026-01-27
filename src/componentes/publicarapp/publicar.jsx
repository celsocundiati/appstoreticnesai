import Header from "../header/header";
import Footer from "../footer/footer";
import { navLinks } from "../../data/db.json";
import { MdCloudUpload } from "react-icons/md";
import { FiImage, FiTag } from "react-icons/fi";
import { icones } from "./icones";
import { useState } from "react";
import { FaCheck  } from "react-icons/fa";

function Publicar() {
  const [form, setForm] = useState({
    nome: "",
    dev: "",
    categoria: "Educação",
    descricaoCurta: "",
    descricaoLonga: "",
    preco: 0,
    tamanho: "",
    versao: "1.0.0",
    icone: null,
  });

  const [screenshots, setScreenshots] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  /* ================= HANDLERS ================= */

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleUpload(e) {
    const files = Array.from(e.target.files);
    const previews = files.map(file => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setScreenshots(prev => [...prev, ...previews]);
  }

  function handleAddTag(e) {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags(prev => [...prev, tagInput.trim()]);
      }
      setTagInput("");
    }
  }

  function getPrecoLabel() {
    return Number(form.preco) === 0
      ? "Gratuito"
      : `R$ ${Number(form.preco).toFixed(2)}`;
  }

  /* ================= UI ================= */

  return (
    <>
      <Header navLinks={navLinks} />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        {/* TÍTULO */}
        <section className="pt-20 space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Portal do Desenvolvedor
          </h1>
          <p className="text-gray-600">
            Publique seu aplicativo web na TicnesStore e alcance milhares de usuários
          </p>
        </section>

        {/* DIRETRIZES */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-3">
          <h2 className="text-lg font-semibold text-blue-700">
            Diretrizes de Submissão
          </h2>

          {[
            "Seu app será revisado pela equipe TicnesStore antes de ser publicado",
            "Certifique-se de que seu app funciona corretamente em navegadores modernos",
            "Forneça descrições claras e screenshots de qualidade",
            "Apps devem estar relacionados a educação ou produtividade",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-blue-700">
              <span className="mt-2 w-2 h-2 bg-blue-700 rounded-full" />
              <p>{item}</p>
            </div>
          ))}
        </section>

        {/* INFORMAÇÕES */}
        <section className="border border-gray-200 rounded-2xl p-8 space-y-6">
          <h2 className="text-xl font-bold">Informações Básicas</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Nome do App" name="nome" placeholder="Ex: MathMaster Pro" value={form.nome} onChange={handleChange} />
            <Input label="Desenvolvedor" name="dev" placeholder="Seu nome ou empresa" value={form.dev} onChange={handleChange} />

            <div>
              <label className="font-semibold">Categoria</label>
              <select
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
                className="mt-2 w-full h-11 rounded-xl outline-none border border-gray-300 px-4 focus:ring-2 focus:ring-blue-500"
              >
                <option>Educação</option>
                <option>Produtividade</option>
                <option>Ferramentas</option>
              </select>
            </div>

            {/* ÍCONES */}
            <div>
              <label className="font-semibold">Ícone</label>
              <div className="mt-3 grid grid-cols-6 gap-3">
                {icones.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setForm(prev => ({ ...prev, icone: item.icone }))}
                    className={`h-20 w-20 text-4xl border border-black/10 cursor-pointer rounded-xl flex items-center justify-center
                      ${form.icone === item.icone ? "ring-2 ring-blue-500" : ""}`}
                  >
                    {item.icone}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Input
            label="Descrição Curta"
            placeholder="Breve descrição do seu app (máx. 100 caracteres)"
            name="descricaoCurta"
            value={form.descricaoCurta}
            onChange={handleChange}
          />

          <div>
            <label className="font-semibold">Descrição Completa</label>
            <textarea
              name="descricaoLonga"
              value={form.descricaoLonga}
              onChange={handleChange}
              className="mt-2 w-full h-40 outline-none rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500"
              placeholder="Descreva detalhadamente as funcionalidades e benefícios do seu app..."
            />
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section className="border border-gray-200 rounded-2xl p-8 space-y-6">
            <span className="flex items-center gap-2">
                <FiImage size={22}/> <h2 className="text-xl font-bold">Screenshots</h2>
            </span>

          <label>
            <input type="file" multiple accept="image/*" hidden onChange={handleUpload} />
            <span className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl inline-block">
              Adicionar Screenshots
            </span>
          </label>

          <div className="flex items-center gap-5 py-2">
            {screenshots.map((img, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <img src={img.url} className="w-40 h-40 object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* PREÇO */}
        <section className="border border-gray-200 rounded-2xl p-8 space-y-6">
          <h2 className="text-xl font-bold">Preço</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Input label="Preço (R$)" name="preco" value={form.preco} onChange={handleChange} />
            <Input label="Tamanho" name="tamanho" placeholder="Ex: 12.5 MB"  value={form.tamanho} onChange={handleChange} />
            <Input label="Versão" name="versao" value={form.versao} onChange={handleChange} />
          </div>
        </section>

        {/* TAGS */}
        <section className="border border-gray-200 rounded-2xl p-8 space-y-6">
          <span className="flex items-center gap-2">
            <FiTag size={22}/> <h2 className="text-xl font-bold">Tag</h2>
          </span>

          <input
            value={tagInput}
            onChange={e => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            placeholder="Digite uma tag e pressione Enter"
            className="w-full h-11 rounded-xl border outline-none border-gray-300 px-4 focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* AÇÕES */}
        <section className="grid md:grid-cols-2 gap-6">
          <button onClick={() => setShowPreview(!showPreview)} className="h-16 rounded-xl bg-gray-200 font-semibold hover:bg-gray-300 transition cursor-pointer">
            Ver Prévia
          </button>
          <button type="submit" className="h-16 rounded-xl cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-3">
            <MdCloudUpload size={22} /> Submeter App
          </button>
        </section>

        {/* PRÉVIA */}
        {showPreview && (
          <section className="border-blue-200 border rounded-2xl p-8 bg-blue-50">

            <span className="flex items-center pb-6 gap-2">
                <FaCheck color="green" size={22}/><h1 className="font-bold text-2xl">Prévia da App</h1>
            </span>

            <div className="bg-white rounded-2xl p-6 space-y-4 border border-black/10">
              <div className="flex gap-6">
                <div className="w-25 h-25 rounded-xl border border-black/10 overflow-hidden bg-blue-50">
                  {icones[0] ? (
                    // <img src={screenshots[0].url} className="w-full h-full object-cover" />
                    <span className="w-full h-full text-6xl object-cover flex items-center justify-center">
                        {form.icone}
                    </span>
                  ) : (
                    <span className="w-full h-full object-cover flex items-center justify-center">
                        <FiImage className="m-auto text-gray-400" size={40} />
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{form.nome || "Nome do App"}</h3>
                  <p className="text-black/75">{form.dev || "Desenvolvedor"}</p>
                  <p className="text-black/57">{form.descricaoCurta || "Descrição curta"}</p>
                </div>
              </div>

              <div>
                <label className="font-semibold text-xl">Sobre</label>
                <p>{form.descricaoLonga || "Descrição completa"}</p>
              </div>

              <div className="flex justify-between text-sm font-medium border-t border-black/10 pt-4">
                <span className="text-black/57">Categoria: <label className="text-black/70 font-medium">{form.categoria}</label></span>
                {form.preco ? 
                (
                    <span className="text-blue-500 font-medium">Preço: {getPrecoLabel()}</span>
                ) :

                (
                    <span>Preço: {getPrecoLabel()}</span>
                )

                }
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Publicar;

/* INPUT CONTROLADO */
function Input({ label, name, value, onChange , placeholder}) {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <input
        required
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full h-11 rounded-xl border outline-none border-gray-300 px-4 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
