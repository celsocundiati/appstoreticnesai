import {HiOutlineArrowDownTray} from "react-icons/hi2";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

function Btn({data, variant})
{
    return(
        <>
            {variant === "baixar" ?(
                <button type="button" className="flex items-center bg-blue-500 text-white text-lg font-semibold py-2 px-4 gap-2 rounded-lg cursor-pointer" >
                    <HiOutlineArrowDownTray size={30}/>    
                    {
                        data.preco === "Gratuito" ? "Baixar Grátis" : "Baixar por"+` ${data.preco}`
                    }           
                </button>
            ) : variant === "favorito" ?(
                <button type="button" className="flex items-center bg-white text-gray-700 text-lg font-semibold py-2 px-4 gap-2 rounded-lg cursor-pointer">
                    <AiOutlineHeart size={30} />
                    Favoritar
                </button>
            ) : variant === "partilhar" ?(
                <button type="button" className="flex items-center bg-white text-gray-700 text-lg font-semibold py-2 px-4 gap-2 rounded-lg cursor-pointer">
                    <AiOutlineShareAlt size={30} />
                    Compartilhar
                </button>
            ) : (
                null
            )}
        </>

    );
}
export default Btn;