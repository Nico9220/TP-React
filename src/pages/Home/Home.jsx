import { useState,useEffect  } from 'react';
import Titulo from '../../components/Titulo/Titulo';
import FormularioItem from '../../components/FormularioItem/FormularioItem';
import ListaItems from '../../components/ListaItems/ListaItems';
import Peliculas from '../../components/Peliculas/Peliculas';
import styles from './Home.module.css';

const LOCAL_STORAGE_POR_VER_KEY = 'peliculasPorVer';
const LOCAL_STORAGE_VISTAS_KEY = 'peliculasVistas';

const Home = () => {
  const [porVer, setPorVer] = useState(() => {
    const storedPorVer = localStorage.getItem(LOCAL_STORAGE_POR_VER_KEY);
    return storedPorVer ? JSON.parse(storedPorVer) : [];
  });
  const [vistas, setVistas] = useState(() => {
    const storedVistas = localStorage.getItem(LOCAL_STORAGE_VISTAS_KEY);
    return storedVistas ? JSON.parse(storedVistas) : [];
  });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_POR_VER_KEY, JSON.stringify(porVer));
  }, [porVer]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_VISTAS_KEY, JSON.stringify(vistas));
  }, [vistas]);

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
