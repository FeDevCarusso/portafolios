import React from "react";
import styles from "./Nav.module.css";

const Nav = ({ scrollToSection }) => {
  //

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("about")} href="#about">
              Sobre mi
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("goals")} href="#goals">
              Objetivos
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("skills")} href="#skills">
              Habilidades
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("tech")} href="#tech">
              Tecnologías
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("projects")} href="#projects">
              Proyectos
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => scrollToSection("contact")} href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
