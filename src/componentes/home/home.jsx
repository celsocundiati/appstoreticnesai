import { useState } from 'react';
import {apps, categories, featuredApps} from "../../data/db.json";
import Hero from "./hero/hero";
import HeroDois from "./hero02/hero";
import Categories from "./categorias/categoria";
import AppSection from "./appsection/appsection";
import HeroSection from './hero/herosection';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      
      <HeroSection/>

      <Categories categories={categories} />

      <AppSection title="🔥 Em Alta" apps={apps} />

      <AppSection title="✨ Lançamentos Recentes" apps={apps} />
      
      <HeroDois app={featuredApps[3]} />


    </main>
  );
}


