

import { useState } from 'react';

import Header from './componentes/header/header';
import Home from './componentes/home/home';
import {navLinks} from "./data/db.json";
import Footer from './componentes/footer/footer';


function App() {
  return (
    // Dev: Celso
    <main className="w-full mx-auto">
      
      <Header navLinks={navLinks} />
      
      <Home />
      <Footer />
      
    
    </main>
  );
}

export default App

