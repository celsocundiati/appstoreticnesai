import Header from '../header/header';
import Footer from '../footer/footer';
import {navLinks} from "../../data/db.json";

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
        
        </section>
    )
}

export default Perfil