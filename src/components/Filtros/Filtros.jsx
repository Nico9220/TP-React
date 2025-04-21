import React, { useState, useEffect } from 'react';
import styles from './Filtros.module.css'; 

function FiltrosPeliculas({ peliculasPorGenero, onFiltrarPeliculas }) {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [filtroDirector, setFiltroDirector] = useState('');
  const [filtroTitulo, setFiltroTitulo] = useState('');
  const [filtroAnio, setFiltroAnio] = useState('');
  const [filtroRating, setFiltroRating] = useState('');

  const toggleFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'director':
        setFiltroDirector(value);
        break;
      case 'titulo':
        setFiltroTitulo(value);
        break;
      case 'anio':
        setFiltroAnio(value);
        break;
      case 'rating':
        setFiltroRating(value);
        break;
      default:
        break;
    }
  };

  const handleBuscar = () => {
    const filtros = {
      director: filtroDirector,
      titulo: filtroTitulo,
      anio: filtroAnio,
      rating: filtroRating,
    };
    console.log("Filtros a enviar:", filtros); 
    onFiltrarPeliculas(filtros);
    setMostrarFiltros(false); 
  };

  return (
    <div className="contenedor-principal-filtro">
      <div className={styles.iconofiltro} onClick={toggleFiltros}>
        {mostrarFiltros ? <span style={{ fontSize: '1.5em' }}>&#x2715;</span> : <span style={{ fontSize: '1.5em' }}>&#x1F50D;</span>}
      </div>

      {mostrarFiltros && (
        <>
          <div className={styles.overlay}></div>
          <div className={styles.contenedorfiltros}>
            <h2>Filtrar Películas</h2>
            <div className={styles.filtro}>
              <label htmlFor="director">Director:</label>
              <input
                type="text"
                id="director"
                name="director"
                value={filtroDirector}
                onChange={handleChange}
              />
            </div>
            <div className={styles.filtro}>
              <label htmlFor="titulo">Título:</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={filtroTitulo}
                onChange={handleChange}
              />
            </div>
            <div className={styles.filtro}>
              <label htmlFor="anio">Año:</label>
              <input
                type="number"
                id="anio"
                name="anio"
                value={filtroAnio}
                onChange={handleChange}
              />
            </div>
            <div className={styles.filtro}>
              <label htmlFor="rating">Rating (mayor o igual a):</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={filtroRating}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleBuscar} className={styles.botonbuscar}>Buscar</button> 
          </div>
        </>
      )}
    </div>
  );
}

export default FiltrosPeliculas;