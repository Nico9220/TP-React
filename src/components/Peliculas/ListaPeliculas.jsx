import React, { useState } from 'react';
import './ListaPeliculas.module.css'; 

const ListaPeliculas = ({ peliculas }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const registrosPorPagina = 10;
  
    const indiceUltimoRegistro = currentPage * registrosPorPagina;
    const indicePrimerRegistro = indiceUltimoRegistro - registrosPorPagina;
    const peliculasPaginaActual = peliculas.slice(indicePrimerRegistro, indiceUltimoRegistro);
  
    const totalPaginas = Math.ceil(peliculas.length / registrosPorPagina);
  
    const handlePaginaAnterior = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handlePaginaSiguiente = () => {
      if (currentPage < totalPaginas) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const renderNumerosPagina = () => {
      const numerosPagina = [];
      for (let i = 1; i <= totalPaginas; i++) {
        numerosPagina.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={currentPage === i ? 'pagina-actual' : 'pagina-numero'}
          >
            {i}
          </button>
        );
      }
      return numerosPagina;
    };
  
    return (
      <div>
        <table className="tabla-peliculas">
          <thead>
            <tr>
              <th>Título</th>
              <th>Director</th>
              <th>Año</th>
              <th>Género</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {peliculasPaginaActual.map((pelicula) => (
              <tr key={pelicula.id}>
                <td>{pelicula.titulo}</td>
                <td>{pelicula.director}</td>
                <td>{pelicula.anio}</td>
                <td>{pelicula.genero.join(', ')}</td>
                <td className="acciones-tabla">
                  <button className="boton-por-ver">Por Ver</button>
                  <button className="boton-vista">Vista</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {peliculas.length > registrosPorPagina && (
          <div className="paginacion">
            <button onClick={handlePaginaAnterior} disabled={currentPage === 1} className="boton-pagina">
              Anterior
            </button>
            {renderNumerosPagina()}
            <button onClick={handlePaginaSiguiente} disabled={currentPage === totalPaginas} className="boton-pagina">
              Siguiente
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default ListaPeliculas;