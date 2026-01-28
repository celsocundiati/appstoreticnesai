import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/home/home';
import Publicar from './componentes/publicarapp/publicar';
import Perfil from './componentes/perfil/perfil';
import AppDetalhes from './componentes/detalhes/detalhes';

function App() {
  return (
    // Dev: Celso
    <main className="w-full mx-auto bg-slate-50 min-h-screen">
      
      <Router>

          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/publicar' element={<Publicar />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/app/:id' element={<AppDetalhes/>} />

          </Routes> 

      </Router>
      
    
    </main>
  );
}

<<<<<<< HEAD
export default App
=======
export default App

>>>>>>> 1e5355fe7cd8a1568412e774fafe690f0bab7419
