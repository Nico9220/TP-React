const Item = ({ item, onMarcarVista }) => {
    return (
    <li>
        {item.titulo} ({item.anio}) – {item.tipo} – ⭐ {item.rating}
        {!item.visto && (
            <button onClick={() => onMarcarVista(item.id)}>Marcar como vista</button>
        )}
    </li>
    );
};

export default Item;
