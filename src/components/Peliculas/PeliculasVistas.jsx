import peliculasIndispensables from '../../../data/pelis.json'; 
import styles from './PeliculasVistas.module.css';


const PeliculasVistas = ({ peliculasVistas }) => {
    return(
        <div>
            {Object.entries(peliculasVistas).map(([pelis]) =>
            console.log(pelis.genero))}
        </div>
    );
};

export default PeliculasVistas;