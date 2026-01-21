// import Principio from './componentes/texto';

// function App() {

//   return (
//     <>
//      <Principio/>
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import {apps, categories, featuredApps, navLinks} from "./data/db.json"
import Hero from "./componentes/home/hero/hero";
import Categories from "./componentes/home/categorias/categoria";
import AppSection from "./componentes/home/appsection/appsection";
import Header from './componentes/header/header';


export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      
      <Header navLinks={navLinks} />
      
      <Hero app={featuredApps[0]} />

      <Categories categories={categories} />

      <AppSection title="🔥 Em Alta" apps={apps} />

      <AppSection title="✨ Lançamentos Recentes" apps={apps} />


    </main>
  );
}


