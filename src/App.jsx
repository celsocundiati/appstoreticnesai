

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header/header';
import Home from './componentes/home/home';
import {navLinks} from "./data/db.json";
import Footer from './componentes/footer/footer';


function App() {
  return (
    // Dev: Celso
    <main className="w-full mx-auto bg-slate-50 min-h-screen">
      
      <Router>

        <Header navLinks={navLinks} />
        <Routes>
          <Route path='/' index element={<Home />} />
          
          

        </Routes> 
        <Footer />

      </Router>
      
    
    </main>
  );
}

export default App

