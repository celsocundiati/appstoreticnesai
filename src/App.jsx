import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/home/home';
<<<<<<< HEAD
import Publicar from './componentes/publicarapp/publicar';
import Perfil from './componentes/perfil/perfil';
import AppDetalhes from './componentes/detalhes/detalhes';
=======
import Publicar from './componentes/publicar/publicar';
import Perfil from './componentes/perfil/perfil';
>>>>>>> 1e5355fe7cd8a1568412e774fafe690f0bab7419


function App() {
  return (
    // Dev: Celso
    <main className="w-full mx-auto bg-slate-50 min-h-screen">
      
      <Router>

          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/publicar' element={<Publicar />} />
            <Route path='/perfil' element={<Perfil />} />
<<<<<<< HEAD
            <Route path='/app/:id' element={<AppDetalhes/>} />
=======
>>>>>>> 1e5355fe7cd8a1568412e774fafe690f0bab7419

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
