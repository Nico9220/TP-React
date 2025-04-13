import { useState } from 'react';
import Titulo from '../../components/Titulo/Titulo';
import FormularioItem from '../../components/FormularioItem/FormularioItem';
import ListaItems from '../../components/ListaItems/ListaItems';
import Peliculas from '../../components/Peliculas/Peliculas';

const Home = () => {
  const [porVer, setPorVer] = useState([]);
  const [vistas, setVistas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleAgregarPorVer = (nuevoItem) => {
    setPorVer([...porVer, { ...nuevoItem, visto: false }]); 
    setMostrarFormulario(false); 
  };

  const handleAgregarVista = (nuevoItem) => {
    setVistas([...vistas, { ...nuevoItem, visto: true }]); 
    setMostrarFormulario(false); 
  };

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleCancelarFormulario = () => {
    setMostrarFormulario(false);
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
      <Peliculas
        onAgregarPorVer={handleAgregarPorVer}
        onAgregarVista={handleAgregarVista}
        mostrarFormulario={mostrarFormulario}
        onMostrarFormulario={handleMostrarFormulario}
        onCancelarFormulario={handleCancelarFormulario}
      />
      <ListaItems titulo="📺 Por ver" items={porVer} onMarcarVista={marcarComoVista} />
      <ListaItems titulo="✅ Vistas" items={vistas} />
    </div>
  );
};

export default Home;
