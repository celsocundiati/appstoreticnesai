import { useState } from "react";
import Hero from "./hero";
import { featuredApps } from "../../../data/db.json";

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % featuredApps.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? featuredApps.length - 1 : prev - 1
    );

  return (
    <div className="relative">
      <Hero app={featuredApps[index]} />

      {/* Botões laterais */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-white/30 backdrop-blur p-3 rounded-full text-white hover:bg-white/50 transition"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 bg-white/30 backdrop-blur p-3 rounded-full text-white hover:bg-white/50 transition"
      >
        ›
      </button>

      {/* Indicadores (footer da hero) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {featuredApps.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-sm transition-all
              ${i === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
