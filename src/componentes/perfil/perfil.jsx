import Header from '../header/header';
import Footer from '../footer/footer';
import {navLinks} from "../../data/db.json";
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
        </section>
    )
}


export default Publicar;
