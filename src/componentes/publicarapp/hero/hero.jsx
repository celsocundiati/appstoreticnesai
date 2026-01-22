// import { useState } from 'react';
// import { Download } from "lucide-react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import {apps} from '../../../data/db.json';
// import { MdPerson } from "react-icons/md";

// function HeroPerfil() {
    
//     const transfer = apps.filter(item => item.transferido === true);

//     const [liked, setLiked] = useState(false)

//     return (
//         <section
//         className={`rounded-3xl mt-25 p-10 flex gap-2 text-left text-white bg-linear-to-l to-blue-500 from-purple-600`}
//         >
            
//             <div className='p-5 rounded-full bg-white/30 items-center'><MdPerson size={35} /></div>   

//             <article className='flex flex-col gap-1.5'>

//                 <h1 className="text-4xl font-bold" >Minha Biblioteca</h1>

//                 <nav className='flex gap-4'>

//                     <span className="flex gap-1 items-center "><Download size={20} /> {transfer.length} Download</span>

//                     <span
//                         className={`text-xl flex gap- items-center gap-1 cursor-pointer`}
//                         onClick={() => setLiked(!liked)}
//                         >
//                         {liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
//                         Favorite
//                     </span>

//                 </nav>


//                 {/* {navFav.map((item) => (
//                     <button
//                         key={item.id}
//                         onClick={(e) => {
//                             e.preventDefault();  // bloqueia refresh
//                             setLiked(!liked);
//                         }}
//                         className="text-xl flex gap-1 items-center cursor-pointer"
//                         >
//                         {liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
//                         {item.label}
//                         </button>

//                 ))} */}
                
//             </article>
//         </section>
//     )
// }

// export default HeroPerfil;

import { useState } from 'react';
import { Download } from "lucide-react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { apps } from '../../../data/db.json';
import { MdPerson } from "react-icons/md";

function HeroPerfil() {
  const transfer = apps.filter(item => item.transferido === true);
  
  const [liked, setLiked] = useState(false);

  return (
    <section className="rounded-3xl mt-25 p-10 flex gap-2 text-left text-white bg-linear-to-l from-purple-600 to-blue-500">
      
      <div className='p-5 rounded-full bg-white/30 flex items-center justify-center'>
        <MdPerson size={35} />
      </div>   

      <article className='flex flex-col gap-1.5'>
        <h1 className="text-4xl font-bold">Minha Biblioteca</h1>

        <nav className='flex gap-4'>

          {/* Download */}
          <span
            onClick={() => setActive("download")}
            className="flex gap-1 items-center cursor-pointer px-2 py-1 
                rounded transition text-gray-200">
            <Download size={20} />
            {transfer.length} Download
          </span>

          {/* Favorite */}
          <span 
            className="flex gap-1 items-center cursor-pointer px-2 py-1 
                rounded transition text-gray-200"
          >
            {liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
            Favorite
          </span>

        </nav>
      </article>

    </section>
  );
}

export default HeroPerfil;
