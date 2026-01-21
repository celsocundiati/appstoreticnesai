

import { useState } from 'react';

import Header from './componentes/header/header';
import Home from './componentes/home/home';
import {navLinks} from "./data/db.json";


function App() {
  return (
    // Dev: Celso
    <main className="max-w-7xl mx-auto px-6 py-8">
      
      <Header navLinks={navLinks} />
      
      <Home />
    
    </main>
  );
}

export default App

