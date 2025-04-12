import { useState } from 'react';
import Titulo from '../../components/Titulo/Titulo';
import FormularioItem from '../../components/FormularioItem/FormularioItem';
import ListaItems from '../../components/ListaItems/ListaItems';

const Home = () => {
  const [porVer, setPorVer] = useState([]);
  const [vistas, setVistas] = useState([]);

  const handleAgregar = (nuevoItem) => {
    setPorVer([...porVer, nuevoItem]);
  };

  const marcarComoVista = (id) => {
    const item = porVer.find((item) => item.id === id);
    if (!item) return;

    setVistas([...vistas, { ...item, visto: true }]);
    setPorVer(porVer.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Titulo texto="🎬 Gestor de Películas y Series" />
      <FormularioItem onAgregar={handleAgregar} />
      <ListaItems titulo="📺 Por ver" items={porVer} onMarcarVista={marcarComoVista} />
      <ListaItems titulo="✅ Vistas" items={vistas} />
    </div>
  );
};

export default Home;
