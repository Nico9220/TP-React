import { useState } from 'react';
import Titulo from '../../components/Titulo/Titulo';
import FormularioItem from '../../components/FormularioItem/FormularioItem';
import ListaItems from '../../components/ListaItems/ListaItems'

const Home = () => {
    const [porVer, setPorVer] = useState ([]);

    const handleAgregar = (nuevoItem) => {
        setPorVer([...porVer, nuevoItem]);
        //console.log('Nuevo Item', nuevoItem);
    }
    return (
        <div>
            <Titulo texto="Gestor de Películas y Series" />
            <FormularioItem onAgregar={handleAgregar} />
            <ListaItems titulo="Lista por ver" items={porVer} />
        </div>
    );
};

export default Home;