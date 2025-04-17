import { useState, useEffect } from 'react';
import Titulo from '../../components/Titulo/Titulo';
import Peliculas from '../../components/Peliculas/Peliculas';
import ListaItems from '../../components/ListaItems/ListaItems';
import peliculasIndispensables from '../../../data/pelis.json'; 
import styles from './Home.module.css';
import Menu from '../../components/Menu/Menu';
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
  const [peliculasPorGenero, setPeliculasPorGenero] = useState({}); 

  useEffect(() => {
    const initialPeliculas = peliculasIndispensables;

    const grouped = {};
    initialPeliculas.forEach(pelicula => {
      pelicula.genero.forEach(genero => {
        if (!grouped[genero]) {
          grouped[genero] = [];
        }
        grouped[genero].push(pelicula);
      });
    });
    setPeliculasPorGenero(grouped);
  }, [porVer, vistas]); 

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_POR_VER_KEY, JSON.stringify(porVer));
  }, [porVer]);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_VISTAS_KEY, JSON.stringify(vistas));
  }, [vistas]);

  const handleAgregarPorVer = (nuevoItem) => {
    setPorVer([...porVer, { ...nuevoItem, visto: false }]);
  };

  const handleAgregarVista = (nuevoItem) => {
    setVistas([...vistas, { ...nuevoItem, visto: true }]);
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
      <div>
      <Titulo texto="Cine" />
      </div>
      <div className={styles.Menu}>
        <Menu />
      </div>
      <div className={styles.Contenido}>
      <Peliculas
        onAgregarPorVer={handleAgregarPorVer}
        onAgregarVista={handleAgregarVista}
        mostrarFormulario={mostrarFormulario}
        onMostrarFormulario={handleMostrarFormulario}
        onCancelarFormulario={handleCancelarFormulario}
      />
      </div>
    </div>
  );
};

export default Home;