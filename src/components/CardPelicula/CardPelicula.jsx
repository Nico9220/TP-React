import styles from './CardPelicula.module.css';

const CardPelicula = ({ item, onMarcarVista, onMarcarPorVer = () => {}, onEditar, onEliminar }) => {
  return (
    <div className={styles.card}>
      <img src={item.imagen} alt={item.titulo} className={styles.imagen} />
      <h3>{item.titulo}</h3>
      <p><strong>Director:</strong> {item.director}</p>
      <p><strong>Año:</strong> {item.anio}</p>
      <p><strong>Género:</strong> {item.genero}</p>
      <p><strong>Rating:</strong> ⭐ {item.rating}</p>
      <p><strong>Tipo:</strong> {item.tipo}</p>

      <button
  className={styles.boton}
  onClick={(e) => {
    e.preventDefault(); // 👈 importante
    e.stopPropagation(); // 👈 esto evita que se dispare el cierre del modal
    onMarcarVista(item.id); // o la acción que quieras
  }}
>
  Marcar "Vista"
</button>

<button
          className={styles.boton}
          onClick={(e) => {
            e.stopPropagation();
            onMarcarPorVer?.(item.id);
          }}
        >
          Marcar "Por ver"
        </button>


<button
  className={styles.boton}
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    onEditar(item);
  }}
>
  Editar
</button>

{onEliminar && (
  <button
    className={styles.boton}
    onClick={(e) => {
      e.stopPropagation();
      onEliminar(item.id);
    }}
  >
    Eliminar
  </button>
)}



    </div>
  );
};

export default CardPelicula;


