import styles from './BotonFlotante.module.css';

const BotonFlotante = ({ onClick, children }) => (
  <button className={styles.botonFlotante} onClick={onClick}>
    {children}
  </button>
);

export default BotonFlotante;
