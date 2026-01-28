import Header from '../header/header';
import Footer from '../footer/footer';
import {navLinks} from "../../data/db.json";
<<<<<<< HEAD
import Cards from './cards/cards';
import HeroPerfil from './hero/hero';


function Publicar(){

    return (
        <section>
                      
            <Header navLinks={navLinks} />
    
            <section className="max-w-7xl mx-auto px-6 py-8">

                <HeroPerfil/>

                <Cards/>
            </section>
    
            <Footer />
                            
=======

function Perfil(){
    return (
        <section>
              
            <Header navLinks={navLinks} />
    
            <section className="max-w-7xl mx-auto px-6 py-8">
    
                <article className="mt-25">
                    <h1>Hello, We are Ticnes AI</h1>
                    <p>Meu Perfil</p>
                </article>
    
            </section>
    
            <Footer />
        
>>>>>>> 1e5355fe7cd8a1568412e774fafe690f0bab7419
        </section>
    )
}

<<<<<<< HEAD
export default Publicar;
=======
export default Perfil
>>>>>>> 1e5355fe7cd8a1568412e774fafe690f0bab7419
