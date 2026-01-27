import { useState } from "react";
import {apps} from '../../../data/db.json';
import AppCard from "../../home/appcard/appcard";

function TabelaOuCards({sessao, defaultTab = 0}){

    const downloadfiltrados = apps.filter(item => item.transferido === true);
    const favoritosfiltrados = apps.filter(item => item.favorito === true);

    return(
        <section>
            {
                sessao === "download" ? (

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {downloadfiltrados.map(app => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>

                ) : sessao === "favorite" ? (
                    
                    <div className="grid grid-cols-3 gap-6">
                        {favoritosfiltrados.map(app => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                ) : (
                    null
                )
            }
        </section>
    );
}
export default TabelaOuCards;