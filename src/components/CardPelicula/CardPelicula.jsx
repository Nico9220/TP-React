import styles from './CardPelicula.module.css';

const CardPelicula = ({ item, onMarcarVista }) => {
return (
    <div className={styles.card}>
      <img src={item.imagen} alt={item.titulo} className={styles.imagen} />
    <h3>{item.titulo}</h3>
    <p><strong>Director:</strong> {item.director}</p>
    <p><strong>Año:</strong> {item.anio}</p>
    <p><strong>Género:</strong> {item.genero}</p>
    <p><strong>Rating:</strong> ⭐ {item.rating}</p>
    <p><strong>Tipo:</strong> {item.tipo}</p>

    {!item.visto && (
  <button className={styles.boton} onClick={() => onMarcarVista(item.id)}>
    Marcar como vista
  </button>
)}
    </div>
);
};

export default CardPelicula;
