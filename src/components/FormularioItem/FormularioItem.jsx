import { useState, useEffect } from 'react';
import styles from './FormularioItem.module.css';

const FormularioItem = ({ onAgregarPorVer, onAgregarVista, onCancelar, itemEditando, onEditarConfirmado }) => {
  const [titulo, setTitulo] = useState('');
  const [director, setDirector] = useState('');
  const [anio, setAnio] = useState('');
  const [genero, setGenero] = useState('');
  const [rating, setRating] = useState('');
  const [tipo, setTipo] = useState('');
  const [agregarPorVer, setAgregarPorVer] = useState(true); 

  // se estamos EDITANDO, precargamos los campos
  useEffect(() => {
    if (itemEditando) {
      console.log("EDITANDO:", itemEditando);
      setTitulo(itemEditando.titulo);
      setDirector(itemEditando.director);
      setAnio(itemEditando.anio);
      setGenero(itemEditando.genero);
      setRating(itemEditando.rating);
      setTipo(itemEditando.tipo);
      setAgregarPorVer(!itemEditando.visto); // Si estaba vista, no es por ver
    }
  }, [itemEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !director || !anio || !genero || !rating || !tipo) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const nuevoItem = {
      id: itemEditando ? itemEditando.id : Date.now(),
      titulo,
      director,
      anio: parseInt(anio),
      genero,
      rating: parseFloat(rating),
      tipo,
      visto: !agregarPorVer
    };

    if (itemEditando) {
      onEditarConfirmado(nuevoItem);
    } else {
      agregarPorVer ? onAgregarPorVer(nuevoItem) : onAgregarVista(nuevoItem);
    }

    onCancelar();

    // Reinicia los campos
    setTitulo('');
    setDirector('');
    setAnio('');
    setGenero('');
    setRating('');
    setTipo('');
    setAgregarPorVer(true); 
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} />
      <input type="number" placeholder="Año" value={anio} onChange={(e) => setAnio(e.target.value)} />

      <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        <option value="">Seleccionar género</option>
        <option value="Acción">Acción</option>
        <option value="Drama">Drama</option>
        <option value="Comedia">Comedia</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
        <option value="Terror">Terror</option>
      </select>

      <input type="number" placeholder="Rating (1-10)" value={rating} onChange={(e) => setRating(e.target.value)} />

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Seleccionar tipo</option>
        <option value="Película">Película</option>
        <option value="Serie">Serie</option>
      </select>

      <div className={styles.checkboxGroup}>
        <label>
          <input type="checkbox" checked={agregarPorVer} onChange={() => setAgregarPorVer(true)} />
          Agregar como "Por ver"
        </label>
        <label>
          <input type="checkbox" checked={!agregarPorVer} onChange={() => setAgregarPorVer(false)} />
          Agregar como "Vista"
        </label>
      </div>

      <button type="submit">{itemEditando ? 'Editar' : 'Agregar'}</button>

      <button type="button" onClick={onCancelar}>{itemEditando ? 'Cancelar edición' : 'Cancelar'}</button>
    </form>
  );
};

export default FormularioItem;