const Item = ({ item }) => {
    return (
    <li>
        {item.titulo} ({item.anio}) – {item.tipo} – ⭐ {item.rating}
    </li>
    );
};

export default Item;
