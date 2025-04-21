import React from "react";
import Download from "../../resources/download.png";
import PorVer from "../../resources/porver.png";
import Visto from "../../resources/visto.png";
import styles from "./Menu.module.css";

const Sidebar = ({ onMostrarHome, onMostrarPorVer, onMostrarVistas }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuitem} onClick={onMostrarHome}>
        <img src={Download} alt="Home" />
      </div>
      <div className={styles.menuitem} onClick={onMostrarPorVer}>
        <img src={PorVer} alt="Por ver" />
      </div>
      <div className={styles.menuitem} onClick={onMostrarVistas}>
        <img src={Visto} alt="Visto" />
      </div>
    </div>
  );
};

export default Sidebar;
