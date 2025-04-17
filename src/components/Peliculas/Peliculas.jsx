import React, { useState, useEffect } from 'react';
import FormularioItem from '../../components/FormularioItem/FormularioItem';
import ListaPeliculas from './ListaPeliculas';
import styles from './Peliculas.module.css';
import peliculasIndispensables from '../../../data/pelis.json';

const Peliculas = ({ onAgregarPorVer, onAgregarVista, mostrarFormulario, onMostrarFormulario, onCancelarFormulario }) => {
  return (
    <div className={styles.contenedorpeliculas}>
      <div className={styles.cabecerapeliculas}>
        <h2>Películas</h2>
        {!mostrarFormulario && (
          <button className={styles.botonagregar} onClick={onMostrarFormulario}>
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