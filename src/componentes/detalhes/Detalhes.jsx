import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { apps } from "../../data/db.json";
import Btn from "../tags/btns/Btn";
import { FiArrowLeft } from "react-icons/fi";
import { LuStar } from "react-icons/lu";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { Star } from "lucide-react";
import Footer from "../footer/footer";

function Detalhes() {
    const { id } = useParams();
    const app = apps.find(app => app.id === Number(id));

    if (!app) return <p>Nenhum app encontrado</p>;

    // Slider state
    const [index, setIndex] = useState(0);
    const total = app.capturas_tela?.length || 0;

    const next = () => {
        setIndex(prev => (prev + 1) % total);
    };

    const prev = () => {
        setIndex(prev => (prev === 0 ? total - 1 : prev - 1));
    };

    return (
        <main className="w-full h-full">
            {/* Header */}
            <div className="flex items-center gap-3 py-5 px-3">
                <Link to="/">
                    <FiArrowLeft size={30} />
                </Link>
                <h1>Voltar ao Início</h1>
            </div>

            {/* App Header */}
            <section className="bg-blue-50 w-full border-y border-blue-100">
                <article className="flex gap-5 max-w-7xl mx-auto px-6 py-8">
                    <div className="bg-blue-100 shadow w-32 h-32 rounded-xl flex justify-center items-center">
                        <span className="text-7xl">{app.icon}</span>
                    </div>

                    <div className="space-y-5">
                        <h1 className="text-4xl font-bold">{app.nome}</h1>
                        <p className="text-gray-900 text-xl">{app.empresa}</p>

                        <div className="flex gap-6 text-lg">
                            <span className="flex gap-1 items-center">
                                <LuStar size={24} className="text-yellow-500" />
                                <label>{app.rating}</label>
                                <label className="text-black/70">
                                    ({app.avaliacoes?.length || 0} avaliações)
                                </label>
                            </span>

                            <p className="flex items-center gap-2 text-black/70">
                                <HiOutlineArrowDownTray size={24} />
                                {app.downloads} downloads
                            </p>
                        </div>

                        <div className="flex gap-5">
                            <Btn data={app} variant="baixar" />
                            <Btn variant="favorito" />
                            <Btn variant="partilhar" />
                        </div>
                    </div>
                </article>
            </section>

            {/* Conteúdo */}
            <section className="max-w-7xl mx-auto px-6 py-8 flex gap-10">
                {/* Coluna principal */}
                <article className="flex-1">
                    {/* Slider */}
                    {total > 0 && (
                        <div className="relative">
                            <h1 className="text-2xl font-bold mb-3">
                                Capturas de Tela
                            </h1>

                            <img
                                src={app.capturas_tela[index]}
                                alt="Screenshot"
                                className="w-full rounded-xl transition-all duration-300"
                            />

                            {/* Botões */}
                            <button
                                onClick={prev}
                                className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
                            >
                                ‹
                            </button>

                            <button
                                onClick={next}
                                className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
                            >
                                ›
                            </button>

                            {/* Miniaturas */}
                            <div className="flex gap-4 mt-5">
                                {app.capturas_tela.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        onClick={() => setIndex(i)}
                                        className={`h-20 w-32 rounded-lg cursor-pointer border-2 ${
                                            index === i
                                                ? "border-blue-600"
                                                : "border-transparent"
                                        }`}
                                        alt="Miniatura"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Descrição */}
                    <div className="space-y-4 my-8">
                        <h1 className="text-2xl font-medium">
                            Sobre este App
                        </h1>
                        <p className="text-xl text-black/70">
                            {app.descricao_completa}
                        </p>
                    </div>

                    {/* Avaliações */}
                    <div className="space-y-4 my-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-medium">
                                Avaliações
                            </h1>
                            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg font-semibold">
                                Escrever Avaliação
                            </button>
                        </div>

                        {app.avaliacoes?.length > 0 ? (
                            <div className="space-y-4 mt-6">
                                {app.avaliacoes.map((av, i) => (
                                    <div
                                        key={i}
                                        className="border border-black/10 rounded-lg p-4 bg-white"
                                    >
                                        <div className="flex justify-between">
                                            <strong>{av.usuario}</strong>
                                            <span className="flex items-center gap-1">
                                                <Star
                                                    size={14}
                                                    className="text-yellow-500"
                                                />
                                                {av.rating}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mt-2">
                                            {av.comentario}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 italic">
                                Este aplicativo ainda não possui avaliações.
                            </p>
                        )}
                    </div>
                </article>

                <article className="w-1/3 space-y-8"> 
                    <div className="border border-black/10 rounded-xl p-4">
                        <h2 className="text-xl font-medium mb-3">Informações</h2>
                        <span className="flex flex-col py-2">
                            <p className="text-black/70">Desenvolvedor/(es)</p>
                            <p className="font-medium text-black/78">{app.empresa}</p>
                        </span>
                        <span className="flex flex-col py-2">
                            <p className="text-black/70">Categoria</p>
                            <p className="text-blue-900 font-medium">{app.categoria}</p>
                        </span>
                        <span className="flex flex-col py-2">
                            <p className="text-black/70">Tamanho</p>
                            <p className="font-medium text-black/78">{app.downloads}</p>
                        </span>
                        <span className="flex flex-col py-2">
                            <p className="text-black/70">Versão</p>
                            <p className="font-medium text-black/78">{app.versao}</p>
                        </span>
                        <span className="flex flex-col py-2">
                            <p className="text-black/70">Ultima Atualização</p>
                            <p className="font-medium text-black/78">{app.atualizacao}</p>
                        </span>
                    </div> 
                    
                    <div className="border border-black/10 rounded-xl p-4">
                        <h2 className="text-xl font-medium mb-3">Requisitos</h2>
                        <span className="flex items-center gap-2 space-y-2">
                            <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                            <p className="text-black/70">Navegador moderno</p>
                        </span>
                        
                        <span className="flex gap-2 space-y-2">
                            <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                            <p className="text-black/70">Conexão com internet</p>
                        </span>
                    </div> 
                    
                    {/* Tags */} 
                    {app.tags?.length > 0 && (
                        <div className="border border-black/10 space-x-2 rounded-xl p-4">
                            <h2 className="text-xl font-medium mb-3">Tags</h2>
                            <article className="space-x-2"> 

                                {app.tags.map((tag, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-400 font-medium px-2 py-1 rounded-xl">
                                        {tag} 
                                    </span> 
                                ))} 
                            
                            </article> 
                        </div> )} 
                        
                </article>
                
            </section>

            <Footer />
        </main>
    );
}

export default Detalhes;
