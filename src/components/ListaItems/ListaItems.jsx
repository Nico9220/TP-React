import Item from '../ListaItems/Item/Item';
import styles from './ListaItems.module.css';

const ListaItems = ({ titulo, items }) => {
if (items.length === 0) {
    return <p>No hay {titulo.toLowerCase()}.</p>;
}

return (
    <div className={styles.lista}>
    <h2>{titulo}</h2>
    <ul>
        {items.map((item) => (
        <Item key={item.id} item={item} />
        ))}
    </ul>
    </div>
);
};

export default ListaItems;
