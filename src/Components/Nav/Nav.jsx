import React from "react";
import styles from "./Nav.module.css";

const Nav = ({ scrollToSection }) => {
  //

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("section1")} href="#section1">
              Sobre mi
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("section2")} href="#section2">
              Objetivos
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("section3")} href="#section3">
              Habilidades
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("section4")} href="#section4">
              Tecnologías
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("section5")} href="#section5">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
