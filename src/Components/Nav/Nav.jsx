import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { FiAlignJustify } from "react-icons/fi";

const Nav = ({ scrollToSection }) => {
  const [show, setShow] = useState(false);
  const [windowWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      let width = window.innerWidth;
      setInnerWidth(width);
    };
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [windowWidth]);

  const handleClickLink = (to) => {
    scrollToSection(to);
    setShow(false);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul
          style={{ transition: ".3s", left: show ? "0" : "-110%" }}
          className={styles.ul}
        >
          <li
            style={{ display: windowWidth <= 768 ? "flex" : "none" }}
            className={styles.showMenu}
          >
            <button onClick={() => setShow(!show)}>
              <FiAlignJustify size={32} color="white" />
            </button>
          </li>
          <li className={styles.li}>
            <a onClick={() => handleClickLink("about")} href="#about">
              Sobre mi
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => handleClickLink("goals")} href="#goals">
              Objetivos
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => handleClickLink("skills")} href="#skills">
              Habilidades
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => handleClickLink("tech")} href="#tech">
              Tecnologías
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => handleClickLink("projects")} href="#projects">
              Proyectos
            </a>
          </li>
          <li className={styles.li}>
            <a onClick={() => handleClickLink("contact")} href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
