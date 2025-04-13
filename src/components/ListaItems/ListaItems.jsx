import Item from '../ListaItems/Item/Item';
import styles from './ListaItems.module.css';

const ListaItems = ({ titulo, items, onMarcarVista }) => {
    let pelis = localStorage.getItem("pelis");
    if (items.length === 0) {
        if (pelis.length === 0){
            return <p>No hay {titulo.toLowerCase()}.</p>;
        } else {
            //items.push(pelis);
        };
    }

return (
    <div className={styles.lista}>
    <h2>{titulo}</h2>
    <ul>
        {items.map((item) => (
        <Item key={item.id} item={item} onMarcarVista={onMarcarVista} />
        ))}
    </ul>
    </div>
);
};

export default ListaItems;