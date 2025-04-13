import React, { useState, useEffect } from 'react';
import FormularioItem from '../../components/FormularioItem/FormularioItem';
import ListaPeliculas from './ListaPeliculas';
import './Peliculas.module.css';
import peliculasIndispensables from '../../../data/pelis.json';

const DivPeliculas = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [peliculas, setPeliculas] = useState(peliculasIndispensables); 
  
    const handleAgregarClick = () => {
      setMostrarFormulario(true);
    };
  
    const handleAgregarPelicula = (nuevoItem) => {
      setPeliculas([...peliculas, nuevoItem]);
    };
  
    const handleCancelarFormulario = () => {
      setMostrarFormulario(false);
    };
  
    return (
      <div className="contenedor-peliculas">
        <div className="cabecera-peliculas">
          <h2>Películas</h2>
          {!mostrarFormulario && (
            <button className="boton-agregar" onClick={handleAgregarClick}>
              + Agregar
            </button>
          )}
        </div>
  
        {!mostrarFormulario && (
          <ListaPeliculas peliculas={peliculas} />
        )}
  
        {mostrarFormulario && (
          <FormularioItem
            onAgregar={handleAgregarPelicula}
            onCancelar={handleCancelarFormulario}
          />
        )}
      </div>
    );
  };
  
  export default DivPeliculas;