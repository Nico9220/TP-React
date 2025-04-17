import React from "react";
import Download from "../../resources/download.png";
import PorVer from "../../resources/porver.png";
import Visto from "../../resources/visto.png";
import styles from "./Menu.module.css";

const Sidebar = () =>  {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuitem}>
        <img src={Download} alt="Home"></img>
      </div>
      <div className={styles.menuitem}>
        <img src={PorVer} alt="Por ver"></img>
      </div>
      <div className={styles.menuitem}>
        <img src={Visto} alt="Visto"></img>
      </div>
    </div>
  );
}

export default Sidebar;