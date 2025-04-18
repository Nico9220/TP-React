import { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import styles from './PeliculasPorGenero.module.css';
import CardPelicula from '../CardPelicula/CardPelicula';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


Modal.setAppElement('#root');

const PeliculasPorGenero = ({ peliculasPorGenero }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const abrirModal = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalIsOpen(false);
    setPeliculaSeleccionada(null);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.contenedorGeneros}>
      {Object.entries(peliculasPorGenero).map(([genero, pelis]) => (
        <div key={genero} className={styles.generoSection}>
          <h2 className={styles.tituloGenero}>{genero}</h2>
          <Slider {...settings}>
            {pelis.map((peli) => (
              <div key={peli.id} className={styles.peliculaItem}>
                <img
                  src={peli.imagen}
                  alt={peli.titulo}
                  className={styles.imagenCarousel}
                  onClick={() => abrirModal(peli)}
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={cerrarModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        {peliculaSeleccionada && (
          <CardPelicula item={peliculaSeleccionada} onMarcarVista={() => {}} />
        )}
        <button onClick={cerrarModal} className={styles.botonCerrar}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default PeliculasPorGenero;
