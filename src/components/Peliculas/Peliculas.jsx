import React, { useState, useEffect } from 'react';
import FormularioItem from '../../components/FormularioItem/FormularioItem';
import ListaPeliculas from './ListaPeliculas';
import './Peliculas.module.css';
import peliculasIndispensables from '../../../data/pelis.json';

const Peliculas = ({ onAgregarPorVer, onAgregarVista, mostrarFormulario, onMostrarFormulario, onCancelarFormulario }) => {
  return (
    <div className="contenedor-peliculas">
      <div className="cabecera-peliculas">
        <h2>Películas</h2>
        {!mostrarFormulario && (
          <button className="boton-agregar" onClick={onMostrarFormulario}>
            + Agregar
          </button>
        )}
      </div>

      {!mostrarFormulario && (
        <ListaPeliculas peliculas={peliculasIndispensables} />
      )}

      {mostrarFormulario && (
        <FormularioItem
          onAgregarPorVer={onAgregarPorVer}
          onAgregarVista={onAgregarVista}
          onCancelar={onCancelarFormulario}
        />
      )}
    </div>
  );
};

export default Peliculas;