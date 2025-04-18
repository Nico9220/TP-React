import { useState, useEffect } from 'react';
import Titulo from '../../components/Titulo/Titulo';
import Peliculas from '../../components/Peliculas/Peliculas';
import peliculasIndispensables from '../../../data/pelis.json'; 
import styles from './Home.module.css';
import Menu from '../../components/Menu/Menu';
import PeliculasPorGenero from '../../components/Peliculas/PeliculasPorGenero';


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

  // Cargar películas por defecto si no hay nada
  useEffect(() => {
    //  Siempre borrar localStorage para que se muestren las nuevas imagenes cargadas en el json (modo desarrollo, cambiar esto cuando se traigan por API)
    localStorage.removeItem(LOCAL_STORAGE_POR_VER_KEY);
    localStorage.removeItem(LOCAL_STORAGE_VISTAS_KEY);
  
    const peliculasIniciales = peliculasIndispensables.map(p => ({
      ...p,
      id: Date.now() + Math.random(), // ID único
      visto: false
    }));
    setPorVer(peliculasIniciales);
    console.log("Cargadas por defecto:", peliculasIniciales);
  }, []);
  

  // Agrupar por género (no lo estamos usando aún, pero lo dejamos listo)
  useEffect(() => {
    const grouped = {};
    peliculasIndispensables.forEach(pelicula => {
      const generos = Array.isArray(pelicula.genero) ? pelicula.genero : [pelicula.genero];
      generos.forEach(genero => {
        if (!grouped[genero]) {
          grouped[genero] = [];
        }
        grouped[genero].push(pelicula);
      });
    });
    setPeliculasPorGenero(grouped);
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_POR_VER_KEY, JSON.stringify(porVer));
  }, [porVer]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_VISTAS_KEY, JSON.stringify(vistas));
  }, [vistas]);

  // Agregar
  const handleAgregarPorVer = (nuevoItem) => {
    setPorVer([...porVer, { ...nuevoItem, visto: false }]);
  };

  const handleAgregarVista = (nuevoItem) => {
    setVistas([...vistas, { ...nuevoItem, visto: true }]);
  };

  // Mostrar/ocultar formulario
  const handleMostrarFormulario = () => setMostrarFormulario(true);
  const handleCancelarFormulario = () => setMostrarFormulario(false);

  // Marcar como vista
  const marcarComoVista = (id) => {
    const item = porVer.find((item) => item.id === id);
    if (!item) return;

    setVistas([...vistas, { ...item, visto: true }]);
    setPorVer(porVer.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Titulo texto="Cine" />

      <div className={styles.Menu}>
        <Menu />
      </div>

      <div className={styles.Contenido}>
  <PeliculasPorGenero
    peliculasPorGenero={peliculasPorGenero}
    onMarcarVista={marcarComoVista}
  />
</div>

    </div>
  );
};

export default Home;
