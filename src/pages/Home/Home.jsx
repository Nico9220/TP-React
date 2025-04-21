// Home.jsx
import { useState, useEffect } from 'react';
import Titulo from '../../components/Titulo/Titulo';
import peliculasIndispensables from '../../../data/pelis.json'; 
import styles from './Home.module.css';
import Menu from '../../components/Menu/Menu';
import PeliculasPorGenero from '../../components/Peliculas/PeliculasPorGenero';
import FormularioItem from '../../components/FormularioItem/FormularioItem';
import CardPelicula from '../../components/CardPelicula/CardPelicula';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const LOCAL_STORAGE_POR_VER_KEY = 'peliculasPorVer';
const LOCAL_STORAGE_VISTAS_KEY = 'peliculasVistas';

const Home = () => {
  const [vistaActual, setVistaActual] = useState('home');
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
  const [itemEditando, setItemEditando] = useState(null);

  useEffect(() => {
    const grouped = {};
    peliculasIndispensables.forEach(pelicula => {
      const generos = Array.isArray(pelicula.genero) ? pelicula.genero : [pelicula.genero];
      generos.forEach(genero => {
        if (!grouped[genero]) grouped[genero] = [];
        grouped[genero].push(pelicula);
      });
    });
    setPeliculasPorGenero(grouped);
  }, []);

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

  const handleMostrarFormulario = () => setMostrarFormulario(true);
  const handleCancelarFormulario = () => setMostrarFormulario(false);

  const marcarComoVista = (item) => {
    if (!vistas.some(p => p.id === item.id)) {
      setVistas([...vistas, { ...item, visto: true }]);
    }
    setPorVer(porVer.filter(p => p.id !== item.id));
  };

  const handleEditar = (item) => {
    setItemEditando(item);
    setMostrarFormulario(true);
  };

  const handleEditarConfirmado = (itemEditado) => {
    if (itemEditado.visto) {
      setVistas(vistas.map(p => p.id === itemEditado.id ? itemEditado : p));
    } else {
      setPorVer(porVer.map(p => p.id === itemEditado.id ? itemEditado : p));
    }
    setItemEditando(null);
    setMostrarFormulario(false);
  };

  const handleEliminar = (id) => {
    setPorVer((prev) => prev.filter((item) => item.id !== id));
    setVistas((prev) => prev.filter((item) => item.id !== id));
  };

  const contarPorGenero = (lista) => {
    const conteo = {};
    lista.forEach((item) => {
      const generos = Array.isArray(item.genero) ? item.genero : [item.genero];
      generos.forEach((genero) => {
        conteo[genero] = (conteo[genero] || 0) + 1;
      });
    });
    return conteo;
  };

  const conteoPorVer = contarPorGenero(porVer);
  const conteoVistas = contarPorGenero(vistas);

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Menu}>
        <Menu
          onMostrarHome={() => setVistaActual('home')}
          onMostrarPorVer={() => setVistaActual('porVer')}
          onMostrarVistas={() => setVistaActual('vistas')}
        />
      </div>

      <div className={styles.MainContent}>
        <div className={styles.Header}>
          <Titulo texto="Cine" />
          <div className={styles.ResumenWrapper}>
            <div className={styles.resumen}>
              <h3>🎯 Resumen</h3>
              <p>Total por ver: {porVer.length}</p>
              <p>Total vistas: {vistas.length}</p>
              <div>
                <strong>Por género (Por ver):</strong>
                <ul>
                  {Object.entries(conteoPorVer).map(([genero, cantidad]) => (
                    <li key={genero}>{genero}: {cantidad}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Por género (Vistas):</strong>
                <ul>
                  {Object.entries(conteoVistas).map(([genero, cantidad]) => (
                    <li key={genero}>{genero}: {cantidad}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Contenido}>
          {mostrarFormulario && (
            <FormularioItem
              onAgregarPorVer={handleAgregarPorVer}
              onAgregarVista={handleAgregarVista}
              onCancelar={handleCancelarFormulario}
              itemEditando={itemEditando}
              onEditarConfirmado={handleEditarConfirmado}
            />
          )}

          {vistaActual === 'home' && (
            <PeliculasPorGenero
              peliculasPorGenero={peliculasPorGenero}
              onMarcarVista={marcarComoVista}
              onMarcarPorVer={handleAgregarPorVer}
              onEditar={handleEditar}
              onCancelarFormulario={handleCancelarFormulario}
              onEliminar={handleEliminar}
            />
          )}

          {vistaActual === 'porVer' && (
            <div className={styles.cardsContainer}>
              <h2>🎯 Películas por ver</h2>
              {porVer.length === 0 ? (
                <p>No hay películas por ver.</p>
              ) : (
                porVer.map(item => (
                  <CardPelicula
                    key={item.id}
                    item={item}
                    onMarcarVista={marcarComoVista}
                    onEditar={handleEditar}
                    onEliminar={handleEliminar}
                  />
                ))
              )}
            </div>
          )}

          {vistaActual === 'vistas' && (
            <div className={styles.cardsContainer}>
              <h2>✅ Películas vistas</h2>
              {vistas.length === 0 ? (
                <p>No hay películas vistas.</p>
              ) : (
                vistas.map(item => (
                  <CardPelicula
                    key={item.id}
                    item={item}
                    onEditar={handleEditar}
                    onEliminar={handleEliminar}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
