import { useState } from 'react';
import styles from './FormularioItem.module.css';

const FormularioItem = ({ onAgregar }) => {
const [titulo, setTitulo] = useState('');
const [director, setDirector] = useState('');
const [anio, setAnio] = useState('');
const [genero, setGenero] = useState('');
const [rating, setRating] = useState('');
const [tipo, setTipo] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !director || !anio || !genero || !rating || !tipo) {
    alert('Todos los campos son obligatorios');
    return;
    }

    const nuevoItem = {
    id: Date.now(),
    titulo,
    director,
    anio,
    genero,
    rating,
    tipo,
    visto: false
    };

    onAgregar(nuevoItem); // Llama a la función que recibe por props
    setTitulo('');
    setDirector('');
    setAnio('');
    setGenero('');
    setRating('');
    setTipo('');};
    
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

    <button type="submit">Agregar</button>
    </form>
);
};

export default FormularioItem;
