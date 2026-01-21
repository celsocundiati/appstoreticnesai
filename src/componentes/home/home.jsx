import { useState } from 'react';
import {apps, categories, featuredApps} from "../../data/db.json";
import Header from '../header/header';
import Footer from '../footer/footer';
import HeroDois from "./hero02/hero";
import Categories from "./categorias/categoria";
import AppSection from "./appsection/appsection";
import HeroSection from './hero/herosection';
import {navLinks} from "../../data/db.json";

export default function Home() {
  return (
    <section>
      
      <Header navLinks={navLinks} />

      <section className="max-w-7xl mx-auto px-6 py-8">

        <HeroSection/>

        <Categories categories={categories} />

        <AppSection title="🔥 Em Alta" apps={apps} />

        <AppSection title="✨ Lançamentos Recentes" apps={apps} />
        
        <HeroDois app={featuredApps[3]} />

      </section>

      <Footer />

    </section>
  );
}


