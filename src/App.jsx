import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/home/home';
import Publicar from './componentes/publicar/publicar';
import Perfil from './componentes/perfil/perfil';


function App() {
  return (
    // Dev: Celso
    <main className="w-full mx-auto bg-slate-50 min-h-screen">
      
      <Router>

          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/publicar' element={<Publicar />} />
            <Route path='/perfil' element={<Perfil />} />

          </Routes> 

      </Router>
      
    
    </main>
  );
}

export default App

