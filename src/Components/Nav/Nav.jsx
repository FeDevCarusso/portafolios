import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>Sobre mi</li>
          <li className={styles.li}>Objetivos</li>
          <li className={styles.li}>Habilidades</li>
          <li className={styles.li}>Tecnologías</li>
          <li className={styles.li}>Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
