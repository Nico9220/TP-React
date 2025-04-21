// import CardPelicula from '../CardPelicula/CardPelicula';
// import FormularioItem from '../FormularioItem/FormularioItem';
// import styles from './Peliculas.module.css';

// const Peliculas = ({
//   items,
//   vistas,
//   onAgregarPorVer,
//   onAgregarVista,
//   onMostrarFormulario,
//   onCancelarFormulario,
//   mostrarFormulario,
//   onMarcarVista,
//   onEditar,
//   onEditarConfirmado,
//   itemEditando,
//   onEliminar // todavia no lo implemente
// }) => {
//   return (
//     <div className={styles.contenedorpeliculas}>
//       <div className={styles.cabecerapeliculas}>
//         <h2>Películas</h2>
//         {!mostrarFormulario && (
//           <button className={styles.botonagregar} onClick={onMostrarFormulario}>
//             + Agregar
//           </button>
//         )}
//       </div>

//       {mostrarFormulario ? (
//         <FormularioItem
//           onAgregarPorVer={onAgregarPorVer}
//           onAgregarVista={onAgregarVista}
//           onCancelar={onCancelarFormulario}
//           itemEditando={itemEditando}
//           onEditarConfirmado={onEditarConfirmado}
//         />
//       ) : (
//         <>
//           <h3>📺 Por ver</h3>
//           <div className={styles.cardsContainer}>
//             {items.length === 0 ? (
//               <p>No hay películas por ver.</p>
//             ) : (
//               items.map((item) => (
//                 <CardPelicula
//                 key={`porver-${item.id}`}
//                   item={item}
//                   onMarcarVista={onMarcarVista}
//                   onEditar={onEditar}
//                 />
//               ))
//             )}
//           </div>

//           <h3>✅ Vistas</h3>
//           <div className={styles.cardsContainer}>
//             {vistas.length === 0 ? (
//               <p>No hay películas vistas.</p>
//             ) : (
//               vistas.map((item) => (
//                 <CardPelicula
//                 key={`visto-${item.id}`}
//                   item={item}
//                   onMarcarVista={() => {}} // ya está vista, no hace nada
//                   onEditar={onEditar}
//                 />
//               ))
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Peliculas;

